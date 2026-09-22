const en = {
  common: {
    at: 'at',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    packages: 'Packages',
  },
  section: {
    about: 'About',
    connect: 'Connect',
    stack: 'Stack',
    experience: 'Experience',
    packages: 'Packages',
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
      'Frontend developer with {years, plural, one {# year} other {# years}} of experience. The last 4.5 of them on product work at edna, a SaaS company in digital communications.',
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
        'I take part in estimation and grooming: work through requirements with the analyst and the team before a task enters the sprint, shape the spec from the frontend side and write spikes where the implementation is not obvious.',
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
  packages: {
    note: 'Every package is built from TypeScript to native JavaScript, with no dependencies and no framework attached.',
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
      'My main personal project, maintained since 2018. A TypeScript charting library written from scratch, with no graphics libraries among its dependencies.\nChart types: combined, radar, funnel, pie and donut - on a shared rendering core with one settings system.\nUtilities in the package: HTTP requests, dates, cookies, an event emitter, DOM and URL helpers.',
    maskit:
      'Input masks: declarative mask syntax, wiring through data attributes, lifecycle callbacks and cyrillic support.',
    notificit:
      'Notifications: configurable animations, close modes, a global loading indicator and class-name customisation.',
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
  consent: {
    label: 'Data processing',
    message:
      'This site counts visits with Yandex.Metrica. It collects your IP address, browser details and cookies - under Russian law that counts as personal data. Nothing is loaded until you answer.',
    policy: 'Read the policy',
    accept: 'Accept',
    deny: 'Necessary only',
    settings: 'Cookie settings',
  },
  privacy: {
    link: 'Data policy',
    title: 'Personal data processing policy',
    description: 'What this site collects, what for, and how to opt out.',
    updated: 'Revision of {date, date, long}',
    operator: {
      title: 'Operator',
      items: [
        'The data operator is Evgeniy Burlak, a private individual and the owner of {site}.',
        'Questions about processing, withdrawal of consent and erasure requests go to {email}.',
      ],
    },
    data: {
      title: 'What is processed',
      note: 'The site never asks for your name, phone or email: there are no forms and no sign-up. Only what the browser sends on its own is processed.',
      items: [
        'IP address and the region derived from it.',
        'Browser and device details: user agent, operating system version, screen resolution, language.',
        'Referrer, pages viewed, time spent on them and clicks on links.',
        'Cookie identifiers that tie visits from one browser into a session.',
      ],
    },
    purposes: {
      title: 'Purposes and legal basis',
      items: [
        'Traffic analytics - to see which sections get read and from which devices. Basis: your consent under clause 1 part 1 article 6 of Federal Law 152-FZ, given in the banner and revocable at any time.',
        'Running the site itself - remembering the chosen language, the colour theme and your answer about consent. Without them the site cannot honour your own choice; they are not used for profiling.',
      ],
      note: 'The data is not used for advertising, is not sold, and goes to nobody beyond the recipients listed below.',
    },
    cookies: {
      title: 'Cookies',
      note: 'Analytics cookies are set only after consent: until the banner is answered the counter is not loaded at all.',
      columns: {
        name: 'Cookie',
        purpose: 'Purpose',
        lifetime: 'Lifetime',
        group: 'Category',
      },
      rows: [
        {
          name: 'locale',
          purpose: 'Chosen interface language',
          lifetime: '1 year',
          group: 'Necessary',
        },
        {
          name: 'theme',
          purpose: 'Chosen colour theme',
          lifetime: '1 year',
          group: 'Necessary',
        },
        {
          name: 'consent',
          purpose: 'Your answer to the consent request',
          lifetime: '6 months',
          group: 'Necessary',
        },
        {
          name: '_ym_uid, _ym_d',
          purpose: 'Visitor identifier and first visit date, Yandex.Metrica',
          lifetime: '1 year',
          group: 'Analytics',
        },
        {
          name: 'other _ym_*',
          purpose: 'Service cookies of Yandex.Metrica',
          lifetime: 'session to 1 year',
          group: 'Analytics',
        },
      ],
    },
    sharing: {
      title: 'Who receives the data',
      items: [
        'Yandex LLC, Russia - the Yandex.Metrica service, processing data on the operator behalf. Its servers are located in Russia.',
        'npm, Inc., USA - when you open the Packages section, your browser itself calls registry.npmjs.org and api.npmjs.org for versions and download counts; your IP address and user agent travel with those requests.',
        'Vercel Inc., USA - hosting. Server logs record the IP address, request time and page address.',
      ],
      note: 'Transfers to npm, Inc. and Vercel Inc. are cross-border: both companies sit outside Russia.',
    },
    retention: {
      title: 'Retention',
      items: [
        'Cookies live in your browser for as long as the table above says, and disappear sooner if you clear site data.',
        'Statistics inside Yandex.Metrica are kept by the service under its own rules.',
        'Server logs are kept by the hosting provider for the period it sets.',
      ],
    },
    rights: {
      title: 'Your rights',
      items: [
        'Request information about the processing of your data, ask for it to be corrected, blocked or erased - by writing to {email}.',
        'Withdraw consent to analytics at any time: the button below brings the banner back, and after a refusal the counter stops loading.',
        'Delete cookies that were already set, from your browser.',
        'Switch Yandex.Metrica off across every site at once with the official Yandex add-on.',
        'Appeal against the operator to Roskomnadzor or in court.',
      ],
      action: 'Cookie settings',
      yandexPolicy: 'Yandex policy on data',
      optOut: 'Opt out of Yandex.Metrica',
    },
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
