const headers: HeadersInit = import.meta.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}` }
  : {};

export async function ghFetch(path: string): Promise<Response> {
  return fetch(`https://api.github.com/${path}`, { headers });
}
