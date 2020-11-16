import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Niza Vera', // e.g: 'Name | Developer'
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
  img: 'profile.jpg',
  paragraphOne:
    'Solution-driven and highly-collaborative Web Developer, who is ardent about integrating libraries to build incredible projects and web applications. Excelling in using technologies such as JavaScript, React, Flask, Python, SQL, and REST APIs. Through my work history, you can expect a proven ability in organization, efficiency, and teamwork.',
  paragraphTwo:
    'For my entire life, I have been a tech-savvy extraordinaire in various sectors of technology. When Apple started releasing the iPhone 4, I started a side hustle fixing phone screens, which eventually led to fixing hardware aspects. At my university, I was dedicated to learning about managing databases. Still, I felt that something was missing and that my intellectuality needed a full circle. Then, I was introduced to coding and so many new doors opened.',
  paragraphThree:
    'My passion for people and technology has inspired me to enable the full potential of humans and the internet. Continual education and keeping up with the latest technology trends are both very important to me. I am continuing to search for a future in AI and Machine Learning. Check out my Github as I regularly upload projects!',
  resume: 'Resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
