import {
  siDocker,
  siFigma,
  siGit,
  siJavascript,
  siJest,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siRedux,
  siSass,
  siStorybook,
  siStyledcomponents,
  siTypescript,
  siVite,
  siWebpack,
  type SimpleIcon,
} from "simple-icons";

export type StackItem = {
  name: string;
  icon: SimpleIcon;
  href: string;
};

export const stack: StackItem[] = [
  { name: "TypeScript", icon: siTypescript, href: "https://www.typescriptlang.org" },
  { name: "JavaScript", icon: siJavascript, href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "React", icon: siReact, href: "https://react.dev" },
  { name: "Redux", icon: siRedux, href: "https://redux.js.org" },
  { name: "Next.js", icon: siNextdotjs, href: "https://nextjs.org" },
  { name: "Node.js", icon: siNodedotjs, href: "https://nodejs.org" },
  { name: "Sass", icon: siSass, href: "https://sass-lang.com" },
  { name: "styled-components", icon: siStyledcomponents, href: "https://styled-components.com" },
  { name: "Vite", icon: siVite, href: "https://vite.dev" },
  { name: "Webpack", icon: siWebpack, href: "https://webpack.js.org" },
  { name: "Jest", icon: siJest, href: "https://jestjs.io" },
  { name: "Storybook", icon: siStorybook, href: "https://storybook.js.org" },
  { name: "Git", icon: siGit, href: "https://git-scm.com" },
  { name: "Docker", icon: siDocker, href: "https://www.docker.com" },
  { name: "Figma", icon: siFigma, href: "https://figma.com" },
];
