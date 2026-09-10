export type Project = {
  name: string;
  package: string;
  version: string;
  description: string;
  tags: string[];
  npm: string;
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Notificit",
    package: "notificit",
    version: "1.0.3",
    description:
      "Zero-dependency toast notifications: stacking, click-outside and button close, configurable animation timing and class names.",
    tags: ["notifications", "toast", "ui"],
    npm: "https://www.npmjs.com/package/notificit",
    repo: "https://github.com/eburlak/notificit",
    demo: "https://eburlak.github.io/notificit",
  },
  {
    name: "Maskit",
    package: "maskit",
    version: "3.0.2",
    description:
      "Input mask driven by a pattern string - digits, letters, cyrillic and auto-filled separators, applied straight from a data attribute.",
    tags: ["input", "mask", "forms"],
    npm: "https://www.npmjs.com/package/maskit",
    repo: "https://github.com/eburlak/maskit",
    demo: "https://eburlak.github.io/maskit",
  },
  {
    name: "Burlak",
    package: "burlak",
    version: "2.0.8",
    description:
      "A small utility belt of helpers collected from day-to-day work, plus a graph module.",
    tags: ["utilities", "graph"],
    npm: "https://www.npmjs.com/package/burlak",
    repo: "https://github.com/eburlak/burlak",
    demo: "https://eburlak.github.io/burlak",
  },
];
