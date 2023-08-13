import LoveBirds from "../assets/lovebirds.png";
import Backend from "../assets/articles.png";
import Frontend from "../assets/readdit.png";
import Portfolio from "../assets/portfolio.png";

export const projectData = [
  {
    title: "Love Birds",
    img: LoveBirds,
    description:
      "Love Birds is an innovative mobile app crafted to deepen connections for those in long-distance relationships. It enables users to share messages, snaps, and games via an external dropbox or 'egg' as in our app. The app's collaborative development utilized React Native, Tailwind, TypeScript, and Firebase to create a captivating user experience.",
    github: "https://github.com/Tomoneill98/Final-Project-Love-Birds-App",
    demo: "https://northcoders.com/projects/june-2023/love-birds",
  },
  {
    title: "Readdit News",
    img: Frontend,
    description:
      "Readdit News offers a Reddit-style platform for users to log in, explore diverse articles, like and comment on content, and engage in discussions from other profiles. Optimistic rendering and data fetching enhance the interface. Created during Northcoders bootcamp using React and CSS",
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
];
