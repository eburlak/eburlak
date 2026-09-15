import CordovaIcon from '@/assets/icons/cordova.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import ElectronIcon from '@/assets/icons/electron.svg';
import FigmaIcon from '@/assets/icons/figma.svg';
import GitIcon from '@/assets/icons/git.svg';
import JavascriptIcon from '@/assets/icons/javascript.svg';
import JestIcon from '@/assets/icons/jest.svg';
import LessIcon from '@/assets/icons/less.svg';
import NextjsIcon from '@/assets/icons/nextjs.svg';
import PlaywrightIcon from '@/assets/icons/playwright.svg';
import NodejsIcon from '@/assets/icons/nodejs.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ReduxIcon from '@/assets/icons/redux.svg';
import SassIcon from '@/assets/icons/sass.svg';
import StorybookIcon from '@/assets/icons/storybook.svg';
import StyledComponentsIcon from '@/assets/icons/styledComponents.svg';
import TestingLibraryIcon from '@/assets/icons/testingLibrary.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import ViteIcon from '@/assets/icons/vite.svg';
import WebpackIcon from '@/assets/icons/webpack.svg';

export type StackItem = {
  name: string;
  icon: TSvgComponent;
  href: string;
  /** Brand colour the icon takes on hover; falls back to the text colour when absent. */
  brand?: string;
};

export type StackGroup = {
  key: string;
  items: StackItem[];
};

export const stack: StackGroup[] = [
  {
    key: 'languages',
    items: [
      {
        name: 'TypeScript',
        icon: TypescriptIcon,
        href: 'https://www.typescriptlang.org',
        brand: '#3178c6',
      },
      {
        name: 'JavaScript',
        icon: JavascriptIcon,
        href: 'https://developer.mozilla.org/docs/Web/JavaScript',
        brand: '#f7df1e',
      },
      {
        name: 'Node.js',
        icon: NodejsIcon,
        href: 'https://nodejs.org',
        brand: '#5fa04e',
      },
    ],
  },
  {
    key: 'frontend',
    items: [
      {
        name: 'React',
        icon: ReactIcon,
        href: 'https://react.dev',
        brand: '#61dafb',
      },
      {
        name: 'Redux Toolkit',
        icon: ReduxIcon,
        href: 'https://redux-toolkit.js.org',
        brand: '#764abc',
      },
      { name: 'Next.js', icon: NextjsIcon, href: 'https://nextjs.org' },
      {
        name: 'styled-components',
        icon: StyledComponentsIcon,
        href: 'https://styled-components.com',
        brand: '#db7093',
      },
      {
        name: 'Sass',
        icon: SassIcon,
        href: 'https://sass-lang.com',
        brand: '#cc6699',
      },
      {
        name: 'Less',
        icon: LessIcon,
        href: 'https://lesscss.org',
        brand: '#1d365d',
      },
    ],
  },
  {
    key: 'testing',
    items: [
      {
        name: 'Jest',
        icon: JestIcon,
        href: 'https://jestjs.io',
        brand: '#c21325',
      },
      {
        name: 'Testing Library',
        icon: TestingLibraryIcon,
        href: 'https://testing-library.com',
        brand: '#e33332',
      },
      {
        name: 'Playwright',
        icon: PlaywrightIcon,
        href: 'https://playwright.dev',
        brand: '#2ead33',
      },
    ],
  },
  {
    key: 'build',
    items: [
      {
        name: 'Vite',
        icon: ViteIcon,
        href: 'https://vite.dev',
        brand: '#9135ff',
      },
      {
        name: 'Webpack',
        icon: WebpackIcon,
        href: 'https://webpack.js.org',
        brand: '#8dd6f9',
      },
      {
        name: 'Docker',
        icon: DockerIcon,
        href: 'https://www.docker.com',
        brand: '#2496ed',
      },
      {
        name: 'Git',
        icon: GitIcon,
        href: 'https://git-scm.com',
        brand: '#f03c2e',
      },
    ],
  },
  {
    key: 'crossPlatform',
    items: [
      {
        name: 'Electron',
        icon: ElectronIcon,
        href: 'https://www.electronjs.org',
        brand: '#47848f',
      },
      {
        name: 'Cordova',
        icon: CordovaIcon,
        href: 'https://cordova.apache.org',
        brand: '#35434f',
      },
    ],
  },
  {
    key: 'tools',
    items: [
      {
        name: 'Storybook',
        icon: StorybookIcon,
        href: 'https://storybook.js.org',
        brand: '#ff4785',
      },
      {
        name: 'Figma',
        icon: FigmaIcon,
        href: 'https://figma.com',
        brand: '#f24e1e',
      },
    ],
  },
];
