export type Package = {
  name: string;
  version: string;
  npm: string;
  repo: string;
  demo?: string;
};

export const packages: Package[] = [
  {
    name: 'burlak',
    version: '2.0.8',
    npm: 'https://www.npmjs.com/package/burlak',
    repo: 'https://github.com/eburlak/burlak',
    demo: 'https://eburlak.github.io/burlak',
  },
  {
    name: 'maskit',
    version: '3.0.2',
    npm: 'https://www.npmjs.com/package/maskit',
    repo: 'https://github.com/eburlak/maskit',
    demo: 'https://eburlak.github.io/maskit',
  },
  {
    name: 'notificit',
    version: '1.0.3',
    npm: 'https://www.npmjs.com/package/notificit',
    repo: 'https://github.com/eburlak/notificit',
    demo: 'https://eburlak.github.io/notificit',
  },
];
