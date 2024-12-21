import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agus Imam Fauzi | Software Engineer',
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
    'Skill saya adalah C/C++, Golang, NodeJS, Python, PHP, Flutter, Laravel, React JS, Vue JS, SQL, CI/CD, Git, Linux, FreeBSD, Docker dan Kubernetes.',
  paragraphThree: `Pengalaman termasuk Senior Programmer dan Project Leader di salah satu perusahaan IT di Indonesia.`,
  //resume: 'Daftar Riwayat Hidup Agus Imam Fauzi.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ebelanja-topup.png',
    title: 'eBelanja Top Up',
    info: `Aplikasi Web Top Up Games, Pulsa atau Voucher Data tanpa registrasi dengan
      pilihan berbagai channel pembayaran di Indonesia.`,
    info2: `Project dengan pengerjaan sekitar 2 bulan.`,
    info3: `Technology Stack: Next JS, Laravel dan MySQL`,
    url: 'https://topup.ebelanja.id',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'titik-nol-hipnoterapi.png',
    title: 'Titik Nol Hipnoterapi',
    info: `Titik Nol Hipnoterapi adalah Layanan Hipnoterapi secara Online yang fokus menyelesaikan masalah atau
      gangguan terkait Pikiran, Perasaan dan Perilaku. Juga untuk meningkatkan performa diri.`,
    info2: `Project dengan pengerjaan sekitar 3 bulan.`,
    info3: `Technology Stack: Next JS, Laravel dan MySQL`,
    url: 'https://titiknolhipnoterapi.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'innet.jpg',
    title: 'Innet',
    info: `Innet adalah ISP (Internet Service Provider) yang beroperasi di DI Yogyakarta.`,
    info2: `Project di perusahaan tempat saya bekerja. Sebagai Project Leader dan Tim mengerjakan
      project ini dalam waktu sekitar 9 bulan.`,
    info3: `Technology Stack: React JS, Next JS, Laravel, Redis dan MySQL`,
    url: 'https://innet.id',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'isibiz.png',
    title: 'Isibiz',
    info: `Platform Top Up Games, Pulsa, Data dan berbagai Top Up / Pembayaran Tagihan Online lainnya tanpa registrasi dengan
      pilihan berbagai channel pembayaran di Indonesia.`,
    info2: `Project pribadi yang saya jalankan sendiri.`,
    info3: `Technology Stack: Next JS, Express JS, Redis dan PostgreSQL`,
    url: 'https://isibiz.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Tertarik merekrut saya? Silahkan!',
  btn: 'Mari Ngobrol',
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
