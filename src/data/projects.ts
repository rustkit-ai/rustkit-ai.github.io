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
    slug: 'rustkit-mcp',
    name: 'rustkit-mcp',
    description: 'An MCP proxy that dramatically reduces LLM token costs. Sit between your AI tools and APIs — efficient, transparent, fast.',
    longDescription: `rustkit-mcp is a proxy layer for the Model Context Protocol (MCP) that filters, compresses, and optimizes tool output before it reaches your LLM.

The result: significantly fewer tokens consumed per request, without changing your workflow. Drop it in between your AI tools and your MCP servers — it's transparent by design.`,
    github: 'https://github.com/rustkit-ai/rustkit-mcp',
    crates: null,
    install: null,
    language: 'Rust',
    hasReleases: false,
  },
  {
    slug: 'rustkit-semantic',
    name: 'rustkit-semantic',
    description: 'Local semantic search for Rust apps — store text, search by meaning. No cloud, no API key. Powered by BGE-Small + HNSW + SQLite, runs fully on-device.',
    longDescription: `rustkit-semantic gives your Rust application a semantic search index backed by BGE-Small-EN-v1.5 (23MB, runs on CPU), HNSW approximate nearest-neighbour search, and SQLite for persistent storage.

No cloud. No API key. Everything runs on-device. Typical use cases include RAG pipelines, semantic caching, knowledge bases, and deduplication.`,
    github: 'https://github.com/rustkit-ai/rustkit-semantic',
    crates: 'https://crates.io/crates/rustkit-semantic',
    install: 'cargo add rustkit-semantic',
    language: 'Rust',
    hasReleases: false,
  },
];
