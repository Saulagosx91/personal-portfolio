export type Skill = { name: string; icon: string };

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'React', icon: 'react' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Visual Studio', icon: 'visualstudio' },
    ],
  },
  {
    category: 'Idiomas',
    items: [
      { name: 'Español (nativo)', icon: 'lang' },
      { name: 'Inglés (intermedio)', icon: 'lang' },
    ],
  },
  {
    category: 'Bases de datos / Escritorio',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'C#', icon: 'csharp' },
    ]
  }
];
