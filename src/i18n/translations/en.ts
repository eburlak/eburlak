const en = {
  common: {
    at: 'at',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    projects: 'Projects',
  },
  section: {
    about: 'About',
    connect: 'Connect',
    stack: 'Stack',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
  },
  profile: {
    name: 'Evgeniy Burlak',
    firstName: 'Evgeniy',
    lastName: 'Burlak',
    location: 'Simferopol · remote only',
    availability: 'Open to new opportunities',
    verified: 'verified',
    about: [
      'Frontend developer with 11+ years of experience. The last 4.5 of them on product work at edna, a SaaS company in digital communications.',
      'Sole frontend developer on Chatflow: built the entire frontend from scratch. On chat-center I rewrite the legacy code of an eight-year-old codebase - class components to function components, SCSS to styled-components, around 80% done. The mobile version I built single-handedly, from scratch.',
      'I contribute to the shared component library used by 8+ frontend developers across the company, and do code reviews, technical interviews and mentoring.',
      'A separate specialty is data visualisation: four years on exchange charts and technical-analysis tooling, and my own TypeScript charting library maintained since 2018.',
    ],
  },
  stack: {
    languages: 'Languages',
    frontend: 'Frontend',
    testing: 'Testing',
    build: 'Build and infrastructure',
    crossPlatform: 'Cross-platform',
    tools: 'Tools',
  },
  experience: {
    present: 'Present',
    remote: 'Remote',
    edna: {
      title: 'Frontend Developer',
      points: [
        'Chatflow: designed and built the whole product frontend from scratch - the only frontend developer in a team of three.',
        'Messaging channels (WhatsApp, Telegram, VK Max), conversation history, supervisor monitoring, and access control across three roles.',
        'Customer-facing bots for WhatsApp and VK Max on Node.js, talking to the backend over REST and WebSocket.',
        'chat-center: moved around 80% of an eight-year-old codebase from class to function components and from SCSS to styled-components, without pausing product work.',
        'Built the mobile version of the interface from scratch on my own and took part in the full interface redesign.',
        'Helped introduce testing: the project had none, now every new piece of code is covered with Jest and @testing-library/react.',
        'I contribute to the internal component library used by 8+ frontend developers, ran around 10 technical interviews and mentored a colleague from junior to middle.',
      ],
    },
    sobix: {
      title: 'Frontend Developer',
      points: [
        'Interfaces for a forex exchange and a crypto wallet.',
        'In-house exchange charting package: candlestick charts, technical-analysis tools and indicators.',
        'Desktop builds on Electron for macOS, Windows and Linux, and an Android build on Cordova.',
      ],
    },
    bestartdesign: {
      title: 'Web Developer',
      points: [
        'WordPress sites built full-stack, from markup to the server side.',
        'Frontend integration into Yii2 projects.',
      ],
    },
  },
  education: {
    sevgu: {
      school: 'Sevastopol State University',
      degree: "Bachelor's, Information Systems and Technologies",
    },
  },
  projects: {
    reading: 'reading registry',
    live: 'npm live',
    cached: 'cached',
    reload: 'Reload package data from npm',
    weekly: 'weekly',
    updated: 'updated',
    demo: 'Demo',
    source: 'Source',
    empty: 'n/a',
    burlak:
      'My main personal project, maintained since 2018. A TypeScript charting library written from scratch, with no graphics libraries among its dependencies. Chart types: combined, radar, funnel, pie and donut, all on a shared rendering core with one settings system. The package also ships a set of utilities: HTTP requests, dates, cookies, an event emitter, and DOM and URL helpers.',
    maskit:
      'Input masks: declarative mask syntax, wiring through data attributes, lifecycle callbacks and cyrillic support.',
    notificit:
      'Toast notifications: configurable animations, close modes and class-name customisation.',
  },
  notFound: {
    status: 'Page not found',
    message:
      'The page you are looking for has been moved, renamed, or never existed in the first place.',
    home: 'Back to home',
  },
  footer: {
    uptime: 'uptime',
    fps: 'fps',
    viewport: 'viewport',
  },
  locale: {
    switch: 'Switch to {locale}',
    ru: 'Russian',
    en: 'English',
  },
  theme: {
    switch: 'Switch to {theme} theme',
    light: 'light',
    dark: 'dark',
  },
};

export default en;
