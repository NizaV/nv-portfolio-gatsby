import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Niza Healy | Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Niza Healy',
  subtitle: "I'm a Full-Stack Developer.",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio-image.jpg',
  paragraphOne:
    'Solution-driven and highly collaborative Web Developer, passionate about integrating libraries to build incredible projects and web applications. I specialize in frontend technologies like JavaScript, React, HTML/CSS, and work extensively with eCommerce ecosystems. I also integrate Amazon Web Services (AWS) cloud solutions to develop and optimize scalable systems. With my experience across both frontend and backend, I strive to deliver high-quality, impactful results and ensure seamless digital experiences.',
  paragraphTwo:
    'My journey in tech began well before my first line of code. When the iPhone 4 was all the rage, I started a side hustle fixing phone screens, which eventually led me to dive deeper into hardware repairs. At university, I explored database management but still felt something was missing. Then I discovered coding, and everything clicked. Development became the perfect mix of creativity and problem-solving, and it’s been an exciting ride ever since.',
  paragraphThree:
    'I’m inspired by the intersection of people and technology, striving to enable humans to unlock their full potential through the internet. I prioritize continuous learning and staying on top of the latest trends in technology, ensuring that I can consistently deliver cutting-edge work. You can find more of my projects and work below in my portfolio!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cma-image.png',
    title: 'Contact Management Application',
    info: 'A full-stack interactive contact list with CRM integration. It enables you to implement CRUD for all contacts in a scalable database. The implementation was created efficiently using JSON, Fetch, and AJAX requests. Its CRM feature is targeted at users needing a system capable of tracking sales, marketing, or even customer service. While also custom-made for implementation in companies that need client information accessible and modifiable.',
    info2: 'Technologies used: JavaScript, React.JS, Flux, Typescript, Postgres, Docker',
    url: 'https://my-crm-app23.s3.amazonaws.com/index.html',
    repo: 'https://github.com/NizaV/crm-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflix-image.png',
    title: 'Netflix Klone',
    info: 'Front-end React app created to exhibit a flawless realistic user experience in a Netflix environment.',
    info2: 'Technologies used: API, Axios, React, and CSS',
    url: 'https://netflix-klone-nv.web.app/',
    repo: 'https://github.com/NizaV/netflix-klone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robinhood-image.png',
    title: 'Robinhood Klone',
    info: 'Front-end React app created to replicate a trading experience like Robinhood provides.',
    info2: 'Technologies used: API, Axios, React, Firebase, and CSS',
    url: 'https://robinhood-klone-nv.web.app',
    repo: 'https://github.com/NizaV/robinhood-klone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'theneworder-image.png',
    title: 'The New Order',
    info: 'A full-stack interactive web application capable of enabling mobile food vendors to boost revenue with online ordering and pick up. It incorporates an active location, menu customization by category, order organization, and feasible asynchronous communication features. It is built to enhance food ordering with convenience and also in the midst of health concerns today.',
    info2:
      'Technologies used: JavaScript, React.JS, Flux, Python, Agile/Scrum, REST API, Bootstrap, and SCSS',
    url: 'https://theneworder.vercel.app/',
    repo: 'https://github.com/NizaV/the-new-order-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'starwars-image.png',
    title: 'Star Wars Blog',
    info: 'A user-facing and extendable front-end application displaying Star Wars information. It is equipped with an intuitive favorites list feature to save information. The application is sourced to a hands-on API with information on films, wiki articles, and the official Star Wars website for any fandom-related information.',
    info2: 'Technologies used: JavaScript, React Components & Props, REST API, Bootstrap ',
    url: 'https://nizav.github.io/StarWars_Blog/',
    repo: 'https://github.com/NizaV/StarWars_Blog', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nizavera95@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nizavera/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NizaV',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/niza_vera',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
