import LoveBirds from "../assets/projectImages/lovebirds.png";
import Backend from "../assets/projectImages/articles.png";
import Frontend from "../assets/projectImages/readdit.png";
import Portfolio from "../assets/projectImages/portfolio.png";
import TipCalc from "../assets/projectImages/tipCalc.png";

export const projectData = [
  {
    title: "Love Birds",
    img: LoveBirds,
    description:
      "Love Birds, an innovative mobile app, enhances long-distance relationships by facilitating shared messages, snaps, and games through an external 'egg'. Developed collaboratively using React Native, Tailwind, TypeScript, and Firebase, it delivers a captivating user experience.",
    github: "https://github.com/Tomoneill98/Final-Project-Love-Birds-App",
    demo: "https://northcoders.com/projects/june-2023/love-birds",
  },
  {
    title: "Readdit News",
    img: Frontend,
    description:
      "Readdit News offers a platform for users to read, like or comment on diverse articles, and engage in discussions from other profiles. Optimistic rendering and data fetching enhance the interface. Created during the Northcoders bootcamp using React and CSS.",
    github: "https://github.com/Tomoneill98/Frontend-Project-Readdit-News",
    demo: "https://tom-readdit.netlify.app/",
  },
  {
    title: "Readdit News - Backend API",
    img: Backend,
    description:
      "The Readdit News API, using an SQL database, was developed with Express, Node, and Jest in an MVC model. It supports C.R.U.D operations for article exploration and comments. Multiple API endpoints connect to the database, each delivering unique content.",
    github: "https://github.com/Tomoneill98/Backend-Project-Readdit-News",
    demo: "https://northcoders-news-fsce.onrender.com/api/articles",
  },
  {
    title: "Portfolio Website",
    img: Portfolio,
    description:
      "Created using React and Tailwind, this portfolio exhibits responsive design, light/dark modes, easy navigation, and more for seamless content access. I hope you have enjoyed my portfolio, please don't hesitate to contact me if you're interested in working with me!",
    github: "https://github.com/Tomoneill98/Portfolio-Website",
    demo: "https://tomoneill.tech/",
  },
  {
    title: "Tom's Tip Calculator",
    img: TipCalc,
    description:
      "Created a web application for splitting the bill easily when out for meals with friends. This application was built using React and features a visually appealing user interface, designed with vanilla CSS.",
    github: "https://github.com/Tomoneill98/tip-calculator.git",
    demo: "https://toms-tip-calculator.netlify.app/",
  },
];
