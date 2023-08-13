import LoveBirds from "../assets/lovebirds.png";
import Backend from "../assets/articles.png";
import Frontend from "../assets/NCNews.png";
import Portfolio from "../assets/portfolio.png";

export const projectData = [
  {
    title: "Love Birds",
    img: LoveBirds,
    description:
      "Love Birds is a mobile application designed to spice up the way in long distance relationships to stay connected in a more fun way. The app was designed as part of a team and was built with React Native, Tailwind, TypeScript and Firebase. ",
    github: "https://github.com/Tomoneill98/Final-Project-Love-Birds-App",
    demo: "https://northcoders.com/projects/june-2023/love-birds",
  },
  {
    title: "Readdit News",
    img: Frontend,
    description:
      "NC News is reddit style website for article reviews which was built with React and CSS. I implemented optimistic rendering and data fetching to create an engaging user interface.",
    github: "https://github.com/Tomoneill98/Frontend-Project-NC-News",
    demo: "https://6479ba39bc81921388643fc7--glowing-malasada-c0125d.netlify.app/",
  },
  {
    title: "Readdit News - Backend API",
    img: Backend,
    description:
      "The NC News API was built with an SQL database and developed in Express.js using an MVC model. It enables C.R.U.D operations to allow for easy reading and the option to post comments on articles.",
    github: "https://github.com/Tomoneill98/Backend-Project-NC-News",
    demo: "https://northcoders-news-fsce.onrender.com/api/articles",
  },
  {
    title: "Portfolio Website",
    img: Portfolio,
    description:
      "This portfolio website was created using React and Tailwind. The latter allowed me to implement responsive design so all mobile, tablet or desktop screens can view my content. I hope you've enjoyed my portfolio, please don't hesitate to contact me if you're interested in working with me!",
    github: "https://github.com/Tomoneill98/Portfolio-Website",
    demo: "https://tomoneill.tech/",
  },
];
