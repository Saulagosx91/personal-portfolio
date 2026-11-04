export type GithubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
};

export const fallbackRepos: GithubRepo[] = [
  {
    name: 'my-portfolio',
    description: 'Portafolio personal construido con Astro.',
    language: 'Astro',
    stargazers_count: 0,
    updated_at: new Date().toISOString(),
    html_url: 'https://github.com/TODO/my-portfolio',
  },
];
