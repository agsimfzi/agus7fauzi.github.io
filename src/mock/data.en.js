import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Software Engineer',
  lang: 'en',
  description: `Welcome to my portfolio website,
  i'am is a Software Engineer.`,
};

// HERO DATA
export const heroData = {
  title: 'Hai, my name is ',
  name: 'Agus Imam Fauzi',
  subtitle: "I'm a Software Engineer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Software Engineer.',
  paragraphTwo:
    'My skills are C/C++, Golang, NodeJS, Python, PHP, Flutter, Laravel, React JS, Vue JS, SQL, CI/CD, Git, Linux, FreeBSD, Docker and Kubernetes.',
  paragraphThree: `Experience includes Senior Software Engineer and Project Leader in one of the IT companies in Indonesia.`,
  // resume: 'Agus Imam Fauzi Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ebelanja-topup.png',
    title: 'eBelanja Top Up',
    info: `The Web App to Top Up Games, Mobile Credit or Internet Data Voucher without registration with
      many a choice of various payment channels in Indonesia.`,
    info2: `Project with 2 months development time.`,
    info3: `Technology Stack: Next JS, Laravel and MySQL`,
    url: 'https://topup.ebelanja.id',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'titik-nol-hipnoterapi.png',
    title: 'Titik Nol Hipnoterapi',
    info: `Titik Nol Hipnoterapi is the Online Hypnotherapy Service that focus on solving problems or
      disorders related to Thoughts, Feelings and Behavior. Also to improve self-performance.`,
    info2: `Project with 2 months development time.`,
    info3: `Technology Stack: Next JS, Laravel and MySQL`,
    url: 'https://titiknolhipnoterapi.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'innet.jpg',
    title: 'Innet',
    info: `Innet is an ISP (Internet Service Provider) operating in DI Yogyakarta, Indonesia.`,
    info2: `Project in the companu where i work. I as the Project Leader and the Team worked
      on this project in 9 months.`,
    info3: `Technology Stack: React JS, Next JS, Laravel, Redis and MySQL`,
    url: 'https://innet.id',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'isibiz.png',
    title: 'Isibiz',
    info: `Top Up Games, Mobile Credit, Internet Data Plan and various other Top Up / Online Bill Payment platform,
      without registration with a choice of various payment channels in Indonesia.`,
    info2: `Personal project that I run myself.`,
    info3: `Technology Stack: Next JS, Express JS, Redis and PostgreSQL`,
    url: 'https://isibiz.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to hire me? Awesome!',
  btn: "Let's Talk",
  email: 'agsimfzi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agsimfzi',
    },
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/agsimfzi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agsimfzi',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/agus7fauzi',
    },
  ],
};
