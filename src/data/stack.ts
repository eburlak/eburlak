import DockerIcon from "@/assets/icons/docker.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import GitIcon from "@/assets/icons/git.svg";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import JestIcon from "@/assets/icons/jest.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import SassIcon from "@/assets/icons/sass.svg";
import StorybookIcon from "@/assets/icons/storybook.svg";
import StyledComponentsIcon from "@/assets/icons/styledComponents.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ViteIcon from "@/assets/icons/vite.svg";
import WebpackIcon from "@/assets/icons/webpack.svg";
import type { SvgIcon } from "@/components/Icon";

export type StackItem = {
  name: string;
  icon: SvgIcon;
  href: string;
  /** Brand colour the icon takes on hover; falls back to the text colour when absent. */
  brand?: string;
};

export const stack: StackItem[] = [
  { name: "TypeScript", icon: TypescriptIcon, href: "https://www.typescriptlang.org", brand: "#3178c6" },
  { name: "JavaScript", icon: JavascriptIcon, href: "https://developer.mozilla.org/docs/Web/JavaScript", brand: "#f7df1e" },
  { name: "React", icon: ReactIcon, href: "https://react.dev", brand: "#61dafb" },
  { name: "Redux", icon: ReduxIcon, href: "https://redux.js.org", brand: "#764abc" },
  { name: "Next.js", icon: NextjsIcon, href: "https://nextjs.org" },
  { name: "Node.js", icon: NodejsIcon, href: "https://nodejs.org", brand: "#5fa04e" },
  { name: "Sass", icon: SassIcon, href: "https://sass-lang.com", brand: "#cc6699" },
  { name: "styled-components", icon: StyledComponentsIcon, href: "https://styled-components.com", brand: "#db7093" },
  { name: "Vite", icon: ViteIcon, href: "https://vite.dev", brand: "#9135ff" },
  { name: "Webpack", icon: WebpackIcon, href: "https://webpack.js.org", brand: "#8dd6f9" },
  { name: "Jest", icon: JestIcon, href: "https://jestjs.io", brand: "#c21325" },
  { name: "Storybook", icon: StorybookIcon, href: "https://storybook.js.org", brand: "#ff4785" },
  { name: "Git", icon: GitIcon, href: "https://git-scm.com", brand: "#f03c2e" },
  { name: "Docker", icon: DockerIcon, href: "https://www.docker.com", brand: "#2496ed" },
  { name: "Figma", icon: FigmaIcon, href: "https://figma.com", brand: "#f24e1e" },
];
