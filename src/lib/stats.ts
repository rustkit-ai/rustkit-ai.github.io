import statsData from '../data/stats.json';

export type CrateDownloads = { downloads: number; recent: number };

type Stats = {
  generatedAt: string;
  crates: Record<string, CrateDownloads>;
  repos: Record<string, { stars: number; releases?: number }>;
};

const data = statsData as Stats;

/** ISO timestamp of when the snapshot was last refreshed. */
export const generatedAt = data.generatedAt;

/** Downloads for a single crate, or null if not in the snapshot. */
export function crateDownloads(id: string): CrateDownloads | null {
  return data.crates[id] ?? null;
}

/** Sum of downloads across a project's crates (semtree publishes several). */
export function projectDownloads(crateIds: string[]): CrateDownloads {
  return crateIds.reduce(
    (acc, id) => {
      const d = data.crates[id];
      return d ? { downloads: acc.downloads + d.downloads, recent: acc.recent + d.recent } : acc;
    },
    { downloads: 0, recent: 0 }
  );
}

/** Per-crate downloads for a project, present crates only, sorted most-downloaded first. */
export function crateBreakdown(crateIds: string[]): Array<{ id: string } & CrateDownloads> {
  return crateIds
    .map((id) => ({ id, ...data.crates[id] }))
    .filter((c): c is { id: string } & CrateDownloads => c.downloads !== undefined)
    .sort((a, b) => b.downloads - a.downloads);
}

/** Total downloads across every tracked crate. */
export const totalDownloads = Object.values(data.crates).reduce((s, d) => s + d.downloads, 0);

/** GitHub stars for a repo (0 if unknown). */
export function stars(repo: string): number {
  return data.repos[repo]?.stars ?? 0;
}

/** Total GitHub stars across all tracked repos. */
export const totalStars = Object.values(data.repos).reduce((s, r) => s + r.stars, 0);

/** Total published releases across all tracked repos. */
export const totalReleases = Object.values(data.repos).reduce((s, r) => s + (r.releases ?? 0), 0);

/** Number of crates published on crates.io. */
export const totalCrates = Object.keys(data.crates).length;

/** Names of public repos present in the snapshot. */
export const repoNames = new Set(Object.keys(data.repos));

/** Compact human-readable count: 1234 -> "1.2k", 950 -> "950". */
export function formatDownloads(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}k`;
  return `${n}`;
}
