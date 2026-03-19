export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  github: string;
  crates: string | null;
  install: string | null;
  language: string;
  hasReleases: boolean;
};

export const projects: Project[] = [
  {
    slug: 'tersify',
    name: 'tersify',
    description: 'Compress code and text for LLMs by stripping noise — reduce tokens by up to 50% and cut API costs without losing meaning.',
    longDescription: `tersify strips comments, blank lines, verbose syntax, and other noise from code and text before it reaches your LLM.

The result: up to 50% fewer tokens per request, lower API costs, and faster responses — without changing the meaning of what you send. Works as a CLI or Rust library, and integrates transparently into any AI workflow.`,
    github: 'https://github.com/rustkit-ai/tersify',
    crates: 'https://crates.io/crates/tersify',
    install: 'cargo install tersify',
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'aimemo',
    name: 'aimemo',
    description: 'Persistent memory for AI coding agents — Claude Code, Cursor, Windsurf, and Copilot. One command setup, zero manual steps.',
    longDescription: `aimemo gives AI coding agents a persistent, structured memory that survives across sessions.
Instead of losing context between conversations, your agent remembers what matters — architecture decisions, conventions, ongoing tasks, and more.

Works out of the box with Claude Code, Cursor, Windsurf, and GitHub Copilot. One command to install, zero config required.`,
    github: 'https://github.com/rustkit-ai/aimemo',
    crates: 'https://crates.io/crates/aimemo',
    install: 'cargo install aimemo',
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'semtree',
    name: 'semtree',
    description: 'Semantic code intelligence for Rust — tree-sitter parsing, embeddings, and RAG for multi-language codebases.',
    longDescription: `semtree turns your codebase into a searchable semantic index. It parses source files with tree-sitter, extracts meaningful chunks (functions, structs, modules), embeds them locally with fastembed, and stores them in a vector index powered by usearch.

The result: lightning-fast semantic search over your code, no cloud required. Use it as a CLI to index and query any codebase, or as a library to build RAG pipelines that inject relevant context into LLM prompts.

Supports Rust, Python, JavaScript, TypeScript, and Go out of the box.`,
    github: 'https://github.com/rustkit-ai/semtree',
    crates: 'https://crates.io/crates/semtree-core',
    install: 'cargo install semtree-cli',
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'semstore',
    name: 'semstore',
    description: 'Local semantic search for Rust applications — store text, search by meaning, no cloud required.',
    longDescription: `semstore is a lightweight semantic store for Rust. Drop it into any application to add meaning-based search: store text entries, search by semantic similarity, get back the most relevant results.

Powered by fastembed for local embeddings (BGE-Small, ~23 MB, no API key needed) and usearch for fast approximate nearest-neighbour search. Backed by SQLite so data persists across restarts.

Bring your own embedder via the Embedder trait if you need a different model or a remote API.`,
    github: 'https://github.com/rustkit-ai/semstore',
    crates: 'https://crates.io/crates/semstore',
    install: null,
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'trimcp',
    name: 'trimcp',
    description: 'MCP proxy that reduces LLM token costs by 60–90% through compression and caching.',
    longDescription: `trimcp sits between your LLM client and upstream MCP servers, compressing and caching tool outputs before they reach the model.

It strips ANSI codes, minifies JSON, removes comments, deduplicates repeated lines, and collapses whitespace — all without losing meaning. The result is 60–90% fewer tokens per MCP tool response, lower API costs, and faster completions.

Works transparently with any MCP-compatible client (Claude, Cursor, Windsurf…). Zero config to get started: point it at your existing MCP servers and it handles the rest.`,
    github: 'https://github.com/rustkit-ai/trimcp',
    crates: 'https://crates.io/crates/trimcp',
    install: 'cargo install trimcp',
    language: 'Rust',
    hasReleases: true,
  },
];
