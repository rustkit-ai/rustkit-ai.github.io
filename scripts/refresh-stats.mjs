#!/usr/bin/env node
/**
 * Refresh src/data/stats.json — download counts (crates.io) and stars (GitHub).
 *
 * Run before `astro build`. If an individual API call fails, the previous value
 * from stats.json is preserved rather than dropped to zero, so a transient
 * outage never regresses the numbers shown on the site.
 *
 * Crate ids and repo slugs are derived from src/data/projects.ts (single source
 * of truth). Set GITHUB_TOKEN to avoid unauthenticated rate limits.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECTS = join(root, 'src/data/projects.ts');
const OUT = join(root, 'src/data/stats.json');
const ORG = 'rustkit-ai';

const UA = 'rustkit-ai.github.io stats refresher (https://github.com/rustkit-ai)';
const crateHeaders = { 'User-Agent': UA };
const ghHeaders = {
  'User-Agent': UA,
  Accept: 'application/vnd.github+json',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function readJsonSafe(path) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch {
    return {};
  }
}

/** Pull every crate id out of the `crateIds: [...]` arrays in projects.ts. */
function extractCrateIds(src) {
  const ids = new Set();
  const re = /crateIds:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(src))) {
    for (const s of m[1].matchAll(/['"]([^'"]+)['"]/g)) ids.add(s[1]);
  }
  return [...ids];
}

async function fetchCrate(id) {
  const res = await fetch(`https://crates.io/api/v1/crates/${id}`, { headers: crateHeaders });
  if (!res.ok) throw new Error(`crates.io ${id}: HTTP ${res.status}`);
  const d = await res.json();
  return { downloads: d.crate?.downloads ?? 0, recent: d.crate?.recent_downloads ?? 0 };
}

async function fetchReleaseCount(name) {
  const res = await fetch(
    `https://api.github.com/repos/${ORG}/${name}/releases?per_page=100`,
    { headers: ghHeaders }
  );
  if (!res.ok) throw new Error(`releases ${name}: HTTP ${res.status}`);
  const arr = await res.json();
  return Array.isArray(arr) ? arr.length : 0;
}

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/orgs/${ORG}/repos?type=public&per_page=100`,
    { headers: ghHeaders }
  );
  if (!res.ok) throw new Error(`github repos: HTTP ${res.status}`);
  const arr = await res.json();
  const repos = {};
  for (const r of arr) {
    repos[r.name] = { stars: r.stargazers_count ?? 0, releases: 0 };
  }
  // Count releases per repo (best-effort; a failure leaves the count at 0).
  await Promise.all(
    Object.keys(repos).map(async (name) => {
      try {
        repos[name].releases = await fetchReleaseCount(name);
      } catch {
        /* leave at 0 */
      }
    })
  );
  return repos;
}

const prev = await readJsonSafe(OUT);
const src = await readFile(PROJECTS, 'utf8');
const crateIds = extractCrateIds(src);

const crates = { ...(prev.crates || {}) };
for (const id of crateIds) {
  try {
    crates[id] = await fetchCrate(id);
    console.log(`✓ ${id}: ${crates[id].downloads} downloads (${crates[id].recent} recent)`);
  } catch (e) {
    console.warn(`✗ ${id} — keeping previous value (${e.message})`);
  }
}

let repos = { ...(prev.repos || {}) };
try {
  repos = { ...repos, ...(await fetchRepos()) };
  console.log(`✓ repos: ${Object.keys(repos).length} public`);
} catch (e) {
  console.warn(`✗ repos — keeping previous values (${e.message})`);
}

const out = { generatedAt: new Date().toISOString(), crates, repos };
await writeFile(OUT, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${OUT}`);
