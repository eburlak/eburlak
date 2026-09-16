import { getYearsSince } from '@/utils/date';

export type ExperiencePosition = {
  key: string;
  start: string;
  end?: string;
  skills?: string[];
};

export type Experience = {
  key: string;
  company: string;
  href?: string;
  location?: string;
  positions: ExperiencePosition[];
};

export const experiences: Experience[] = [
  {
    key: 'edna',
    company: 'edna',
    href: 'https://edna.ru',
    location: 'remote',
    positions: [
      {
        key: 'edna',
        start: '2022',
        skills: [
          'TypeScript',
          'React',
          'Redux Toolkit',
          'styled-components',
          'Jest',
          'Node.js',
        ],
      },
    ],
  },
  {
    key: 'sobix',
    company: 'Sobix',
    positions: [
      {
        key: 'sobix',
        start: '2018',
        end: '2022',
        skills: [
          'JavaScript',
          'React',
          'Sass',
          'Electron',
          'Cordova',
          'Docker',
        ],
      },
    ],
  },
  {
    key: 'bestartdesign',
    company: 'BestArtDesign',
    positions: [
      {
        key: 'bestartdesign',
        start: '2014',
        end: '2018',
        skills: ['JavaScript', 'Vue', 'jQuery', 'Less', 'PHP', 'MySQL'],
      },
    ],
  },
];

const getCareerStart = () => {
  const [firstCompany] = experiences.slice(-1);
  const [firstPosition] = firstCompany.positions.slice(-1);

  return firstPosition.start;
};

export const getExperienceYears = () => getYearsSince(getCareerStart());

export type Education = {
  key: string;
  start: string;
  end: string;
};

export const education: Education[] = [
  {
    key: 'sevgu',
    start: '2010',
    end: '2015',
  },
];
