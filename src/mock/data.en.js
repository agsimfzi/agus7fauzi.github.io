import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Programmer',
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
    'My skills are HTML, CSS, Javascript, Golang, NodeJS, PHP, NoSQL (MongoDB), SQL and Docker.',
  paragraphThree: `Besides the basics above, I also usually use Libraries and Frameworks, such as
  Micro (Microservices Platform), ExpressJS, Laravel / Lumen, ReactJS, Bootstrap and Material UI. And sometimes I use
  ORM Sequelize for my NodeJS app.`,
  resume: 'Agus Imam Fauzi Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'titik-nol-hipnoterapi.png',
    title: 'Titik Nol Hipnoterapi',
    info: `The POS application, also known as a cashier application, is the application or software used
    to support direct transactions with sellers in various retail stores that have many branches.`,
    info2: `I made this application with ReactJS Technology, Library and Framework, Material UI, NodeJS, ExpressJS, GraphQL Language,
    Apollo, MySQL, ORM Sequelize.`,
    info3: 'Login with Email: admin@gmail.com, Password: admin',
    url: 'https://posix-pos.web.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ebelanja-topup.png',
    title: 'eBelanja TopUp',
    info: `Login is also called" logon "or" sign in "is a term in terms of computer security, which is a process of entry
    for users to access the computer system. Login is intended to manage the identification process.`,
    info2: ` Features: Login & Registration, User Access Level,
    Menu Management, User Management, User Activation and Forgot Password.`,
    info3: `Admin Login: Email: admin@gmail.com, Password: admin. User Login: Email: user@gmail.com, Password: user.`,
    url: 'http://agus7fauzi-live.my.id/login-system-codeigniter3',
    repo: 'https://github.com/agus7fauzi/login-system-codeigniter3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'innet.jpg',
    title: 'Innet',
    info: `Bookstore Software is computer software designed for the purposes of processing book data in bookstores and other stores similar to it.`,
    info2: `Made with PHP Native / Core using the Procedural paradigm. This application has features: Login & Registration as well as Remember me, Create, Read, Update and Delete book data.`,
    info3: `Login Admin: Username: admin, Password: admin`,
    url: 'https://agus7fauzi-live.my.id/php-procedural-rev',
    repo: 'https://github.com/agus7fauzi/php-procedural', // if no repo, the button will not show up'
  },
  {
    id: nanoid(),
    img: 'isibiz.png',
    title: 'Isibiz',
    info: `Bookstore Software is computer software designed for the purposes of processing book data in bookstores and other stores similar to it.`,
    info2: `Made with PHP Native / Core using the Procedural paradigm. This application has features: Login & Registration as well as Remember me, Create, Read, Update and Delete book data.`,
    info3: `Login Admin: Username: admin, Password: admin`,
    url: 'https://agus7fauzi-live.my.id/php-procedural-rev',
    repo: 'https://github.com/agus7fauzi/php-procedural', // if no repo, the button will not show up'
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'agus7fauzi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@agus7fauzi',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/agus7fauzi',
    },
  ],
};
