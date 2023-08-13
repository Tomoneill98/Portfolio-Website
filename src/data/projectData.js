import LoveBirds from "../assets/lovebirds.png";
import Backend from "../assets/articles.png";
import Frontend from "../assets/NCNews.png";
import Portfolio from "../assets/portfolio.png";

export const projectData = [
  {
    title: "Love Birds",
    img: LoveBirds,
    description:
      "Love Birds is a mobile application designed to spice up how users in long distance relationships can stay connected. You can send messages, snaps and games for your partner through an external 'egg' which can only be opened by playing a game/answering a quiz set by your partner. The app was designed as part of a team and was built with React Native, Tailwind, TypeScript and Firebase. ",
    github: "https://github.com/Tomoneill98/Final-Project-Love-Birds-App",
    demo: "https://northcoders.com/projects/june-2023/love-birds",
  },
  {
    title: "Readdit News",
    img: Frontend,
    description:
      "Readdit News is a Reddit-style news articles website in which users can log in to a profile and read or review articles of different categories by liking or posting comments under them, as well as viewing comments from other profiles. Otimistic rendering and data fetching have been implemented to create an engaging user interface. The website was built with React and styled with Tailwind.",
    github: "https://github.com/Tomoneill98/Frontend-Project-NC-News",
    demo: "https://6479ba39bc81921388643fc7--glowing-malasada-c0125d.netlify.app/",
  },
  {
    title: "Readdit News - Backend API",
    img: Backend,
    description:
      "The Readdit News API was built with an SQL database and developed with Express, Node and Jest using an MVC model. It enables C.R.U.D operations to allow for easy reading and the option to post comments on articles. Various API endpoints are connected to the database and each responds with different content.",
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
