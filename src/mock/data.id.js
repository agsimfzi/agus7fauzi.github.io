import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Programmer',
  lang: 'id',
  description: `Selamat datang di situs portofolio saya,
  saya adalah seorang Software Engineer.`,
};

// HERO DATA
export const heroData = {
  title: 'Hai, Saya ',
  name: 'Agus Imam Fauzi',
  subtitle: 'Seorang Software Engineer.',
  cta: 'Cari tahu',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Saya adalah seorang Software Engineer.',
  paragraphTwo:
    'Skill saya adalah HTML, CSS, Javascript, Golang, NodeJS, PHP, NoSQL (MongoDB), SQL dan Docker.',
  paragraphThree: `Selain basic di atas, saya juga biasa menggunakan Library dan Framework, seperti
  Micro (Microservices Platform), ExpressJS, Laravel / Lumen, ReactJS, Bootstrap dan Material UI. Dan kadang saya menggunakan
  ORM Sequelize untuk aplikasi NodeJS saya.`,
  resume: 'Daftar Riwayat Hidup Agus Imam Fauzi.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'titik-nol-hipnoterapi.png',
    title: 'Titik Nol Hipnoterapi',
    info: `Aplikasi POS biasa juga disebut dengan aplikasi kasir adalah aplikasi atau software yang digunakan
    untuk mendukung transaksi langsung dengan penjual di berbagai toko retail yang memiliki banyak cabang.`,
    info2: `Aplikasi ini saya buat dengan Teknologi, Library dan Framework ReactJS, Material UI, NodeJS, ExpressJS, GraphQL Language,
    Apollo , MySQL, ORM Sequelize.`,
    info3: 'Login dengan Email: admin@gmail.com, Password: admin',
    url: 'https://posix-pos.web.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ebelanja-topup.png',
    title: 'eBelanja TopUp',
    info: `Login di­sebut juga “logon” atau “sign in” adalah istilah dalam hal keamanan komputer, yakni berupa proses pintu masuk
    bagi pengguna untuk mengakses sistem komputer. Login dimaksudkan untuk mengatur proses identifikasi.`,
    info2: `Fitur: Login & Registrasi, User Access Level,
    Menu Management, User Management, User Activation dan Forgot Password.`,
    info3: `Login Admin: Email: admin@gmail.com, Password: admin. Login User: Email: user@gmail.com, Password: user`,
    url: 'http://agus7fauzi-live.my.id/login-system-codeigniter3',
    repo: 'https://github.com/agus7fauzi/login-system-codeigniter3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'innet.jpg',
    title: 'Innet',
    info: `Software Toko Buku adalah perangkat lunak komputer yang didesain untuk keperluan mengolah data buku di toko buku serta toko-toko lain yang sejenis dengan itu.`,
    info2: `Dibuat dengan PHP Native/ Core menggunakan paradigma Prosedural. Aplikasi ini mempunyai fitur: Login & Registrasi serta Remember me, Create, Read, Update dan Delete data-data buku.`,
    info3: `Login Admin: Username: admin, Password: admin`,
    url: 'https://agus7fauzi-live.my.id/php-procedural-rev',
    repo: 'https://github.com/agus7fauzi/php-procedural', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'isibiz.png',
    title: 'Isibiz',
    info: `Software Toko Buku adalah perangkat lunak komputer yang didesain untuk keperluan mengolah data buku di toko buku serta toko-toko lain yang sejenis dengan itu.`,
    info2: `Dibuat dengan PHP Native/ Core menggunakan paradigma Prosedural. Aplikasi ini mempunyai fitur: Login & Registrasi serta Remember me, Create, Read, Update dan Delete data-data buku.`,
    info3: `Login Admin: Username: admin, Password: admin`,
    url: 'https://agus7fauzi-live.my.id/php-procedural-rev',
    repo: 'https://github.com/agus7fauzi/php-procedural', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ingin menghubungi saya? Silahkan!',
  btn: 'Mari Ngobrol',
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
