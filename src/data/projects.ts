export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  github: string;
  crates: string | null;
  /** crates.io crate ids whose downloads are summed for this project (a project may publish several crates). */
  crateIds: string[];
  install: string | null;
  language: string;
  hasReleases: boolean;
};

export const projects: Project[] = [
  {
    slug: 'noxa',
    name: 'noxa',
    description: 'Passively captures business rules from your Claude Code conversations and turns them into typed validation code.',
    longDescription: `noxa hooks into Claude Code and automatically captures the business rules, constraints, and invariants you mention in conversation, then makes them permanent. No more re-teaching your AI the same rules every session.

A passive notification hook extracts entities and constraints (21 patterns, English and French), scores them by confidence, and writes them to a git-versioned \`.noxa/rules.toml\`. From there noxa injects them into \`CLAUDE.md\` so the next session starts informed, generates typed validation functions in Rust, TypeScript, or Python, and exposes the rules over an MCP server so Claude can query them in real time.

Ambiguous phrasing? \`noxa enrich\` uses Claude Haiku to sharpen the extraction.`,
    github: 'https://github.com/rustkit-ai/noxa',
    crates: 'https://crates.io/crates/noxa',
    crateIds: ['noxa'],
    install: 'cargo install noxa',
    language: 'Rust',
    hasReleases: false,
  },
  {
    slug: 'tersify',
    name: 'tersify',
    description: 'Compress code and text for LLMs by stripping noise. Cuts roughly half the tokens without changing the meaning.',
    longDescription: `tersify strips comments, blank lines, verbose syntax, and other noise from code and text before it reaches your LLM.

The result is roughly 50% fewer tokens per request, lower API costs, and faster responses, without changing the meaning of what you send. Works as a CLI or Rust library, and integrates into any AI workflow.`,
    github: 'https://github.com/rustkit-ai/tersify',
    crates: 'https://crates.io/crates/tersify',
    crateIds: ['tersify'],
    install: 'cargo install tersify',
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'aimemo',
    name: 'aimemo',
    description: 'Persistent memory for AI coding agents: Claude Code, Cursor, Windsurf, and Copilot. One command to install.',
    longDescription: `aimemo gives AI coding agents a persistent, structured memory that survives across sessions.
Instead of losing context between conversations, your agent remembers what matters: architecture decisions, conventions, ongoing tasks, and more.

Works with Claude Code, Cursor, Windsurf, and GitHub Copilot. One command to install; no config needed to start.`,
    github: 'https://github.com/rustkit-ai/aimemo',
    crates: 'https://crates.io/crates/aimemo',
    crateIds: ['aimemo'],
    install: 'cargo install aimemo',
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'semtree',
    name: 'semtree',
    description: 'Semantic code search for any codebase: tree-sitter parsing, local embeddings, and hybrid vector + BM25 retrieval. Multi-language, multi-backend.',
    longDescription: `semtree turns your codebase into a searchable semantic index. It parses source files with tree-sitter, extracts meaningful chunks (functions, structs, methods), embeds them locally with fastembed, and stores them in an HNSW vector index, all on-device, no daemon, no API key required.

The result: lightning-fast semantic search over your code. Use it as a CLI to index, search, and pull RAG context blocks for LLMs, or as a library to build your own pipelines. \`semtree analyze\` surfaces complexity metrics and your largest functions.

Multi-language (Rust, Python, JavaScript, TypeScript, Go) and multi-backend: run embeddings locally, or plug in OpenAI or Ollama as drop-in backends when you need higher quality.`,
    github: 'https://github.com/rustkit-ai/semtree',
    crates: 'https://crates.io/crates/semtree-rag',
    crateIds: ['semtree-core', 'semtree-parse', 'semtree-embed', 'semtree-store', 'semtree-rag', 'semtree-analyze', 'semtree-cli'],
    install: 'cargo install semtree-cli',
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'semstore',
    name: 'semstore',
    description: 'Local semantic search for Rust applications: store text, search by meaning, no cloud required.',
    longDescription: `semstore is a lightweight semantic store for Rust. Drop it into any application to add meaning-based search: store text entries, search by semantic similarity, get back the most relevant results.

Powered by fastembed for local embeddings (BGE-Small, ~23 MB, no API key needed) and usearch for fast approximate nearest-neighbour search. Backed by SQLite so data persists across restarts.

Bring your own embedder via the Embedder trait if you need a different model or a remote API.`,
    github: 'https://github.com/rustkit-ai/semstore',
    crates: 'https://crates.io/crates/semstore',
    crateIds: ['semstore'],
    install: null,
    language: 'Rust',
    hasReleases: true,
  },
  {
    slug: 'trimcp',
    name: 'trimcp',
    description: 'MCP proxy that reduces LLM token costs by 60-90% through compression and caching.',
    longDescription: `trimcp sits between your LLM client and upstream MCP servers, compressing and caching tool outputs before they reach the model.

It strips ANSI codes, minifies JSON, removes comments, deduplicates repeated lines, and collapses whitespace, all without losing meaning. The result is 60-90% fewer tokens per MCP tool response, lower API costs, and faster completions.

Works with any MCP-compatible client (Claude, Cursor, Windsurf, and others). No config to get started: point it at your existing MCP servers and it handles the rest.`,
    github: 'https://github.com/rustkit-ai/trimcp',
    crates: 'https://crates.io/crates/trimcp',
    crateIds: ['trimcp'],
    install: 'cargo install trimcp',
    language: 'Rust',
    hasReleases: true,
  },
];
