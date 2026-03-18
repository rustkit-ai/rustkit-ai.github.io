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
];
