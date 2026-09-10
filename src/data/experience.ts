export type ExperiencePosition = {
  title: string;
  start: string;
  end?: string;
  description?: string[];
  skills?: string[];
};

export type Experience = {
  company: string;
  logo?: string;
  href?: string;
  location?: string;
  positions: ExperiencePosition[];
};

// TODO: replace with the real work history from the CV.
export const experiences: Experience[] = [
  {
    company: "edna",
    href: "https://edna.ru",
    location: "Remote",
    positions: [
      {
        title: "Senior Frontend Developer",
        start: "2021",
        description: [
          "Chat-center: agent workplace for contact-center operators - real-time threads, routing, supervisor dashboards.",
          "Chatflow: visual bot-scenario editor built on a canvas of nodes and connections.",
          "Moved legacy classic-Redux modules onto Redux Toolkit slices and cut dead code along the way.",
        ],
        skills: ["React", "TypeScript", "Redux Toolkit", "WebSocket", "Jest"],
      },
    ],
  },
  {
    company: "Previous company",
    location: "Russia",
    positions: [
      {
        title: "Frontend Developer",
        start: "2018",
        end: "2021",
        description: ["TODO: fill in from the CV."],
        skills: ["JavaScript", "React", "Sass"],
      },
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

// TODO: replace with real education data.
export const education: Education[] = [
  {
    school: "University",
    degree: "TODO: degree, faculty",
    start: "2010",
    end: "2015",
  },
];
