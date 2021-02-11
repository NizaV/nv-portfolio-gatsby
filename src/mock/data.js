import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Niza Vera | Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Niza Vera',
  subtitle: "I'm a Full Stack Developer.",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio-image.jpg',
  paragraphOne:
    'Solution-driven and highly-collaborative Web Developer, who is ardent about integrating libraries to build incredible projects and web applications. Excelling in using technologies such as JavaScript, React, Flask, Python, SQL, and REST APIs. Through my work history, you can expect a proven ability in organization, efficiency, and teamwork.',
  paragraphTwo:
    'My entire life, I have been a tech-savvy extraordinaire in various sectors of technology. When Apple started releasing the iPhone 4, I started a side hustle fixing phone screens, which eventually led to fixing hardware aspects. At my university, I was dedicated to learning about managing databases. Still, I felt that something was missing and that my intellectuality needed a full circle. Then, I was introduced to coding and so many new doors opened.',
  paragraphThree:
    'My passion for people and technology has inspired me to enable the full potential of humans and the internet. Continual education and keeping up with the latest technology trends are both very important to me. Check out my Github as I regularly upload projects!',
  resume: 'Resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'theneworder-image.png',
    title: 'The New Order',
    info:
      'A full-stack interactive web application capable of enabling mobile food vendors to boost revenue with online ordering and pick up. It incorporates an active location, menu customization by category, order organization, and feasible asynchronous communication features. It is built to enhance food ordering with convenience and also in the midst of health concerns today.',
    info2:
      'Technologies used: JavaScript, React.JS, Flux, Python, Agile/Scrum, REST API, Bootstrap, and SCSS',
    url: 'https://theneworder.vercel.app/',
    repo: 'https://github.com/NizaV/the-new-order-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cma-image.png',
    title: 'Contact Management Application',
    info:
      'A full-stack interactive contact list with CRM integration. It enables you to implement CRUD for all contacts in a scalable database. The implementation was created efficiently using JSON, Fetch, and AJAX requests. Its CRM feature is targeted at users needing a system capable of tracking sales, marketing, or even customer service. While also custom-made for implementation in companies that need client information accessible and modifiable.',
    info2:
      'Technologies used: JavaScript, React.JS, Flux, API, React-Router, Context, Props, Python, MySQL',
    url: 'https://contact-management-application.vercel.app/',
    repo: 'https://github.com/NizaV/Contact_List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'starwars-image.png',
    title: 'Star Wars Blog',
    info:
      'A user-facing and extendable front-end application displaying Star Wars information. It is equipped with an intuitive favorites list feature to save information. The application is sourced to a hands-on API with information on films, wiki articles, and the official Star Wars website for any fandom-related information.',
    info2: 'Technologies used: JavaScript, React Components & Props, REST API, Bootstrap ',
    url: 'https://nizav.github.io/StarWars_Blog/',
    repo: 'https://github.com/NizaV/StarWars_Blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflix-image.png',
    title: 'Netflix Klone',
    info:
      'Front-end React app created to exhibit a flawless realistic user experience in a Netflix environment.',
    info2: 'Technologies used: API, Axios, React, and CSS',
    url: 'https://netflix-klone-nv.web.app/',
    repo: 'https://github.com/NizaV/netflix-klone', // if no repo, the button will not show up
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
