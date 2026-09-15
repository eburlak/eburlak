export type Project = {
  name: string;
  package: string;
  version: string;
  tags: string[];
  npm: string;
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: 'Burlak',
    package: 'burlak',
    version: '2.0.8',
    tags: ['charts', 'typescript', 'zero-dependency'],
    npm: 'https://www.npmjs.com/package/burlak',
    repo: 'https://github.com/eburlak/burlak',
    demo: 'https://eburlak.github.io/burlak',
  },
  {
    name: 'Maskit',
    package: 'maskit',
    version: '3.0.2',
    tags: ['input', 'mask', 'forms'],
    npm: 'https://www.npmjs.com/package/maskit',
    repo: 'https://github.com/eburlak/maskit',
    demo: 'https://eburlak.github.io/maskit',
  },
  {
    name: 'Notificit',
    package: 'notificit',
    version: '1.0.3',
    tags: ['notifications', 'toast', 'ui'],
    npm: 'https://www.npmjs.com/package/notificit',
    repo: 'https://github.com/eburlak/notificit',
    demo: 'https://eburlak.github.io/notificit',
  },
];
