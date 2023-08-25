import bitcoin from "../public/projects/coin_market.JPG";
import tasks from "../public/projects/react-typescript.JPG";
import rick from "../public/projects/rick_api.JPG";
import phone from "../public/projects/bestphone.JPG";
import login from "../public/projects/login.JPG";
import task_mongo from "../public/projects/tasks_mongo.JPG";
import paypal from "../public/projects/paypal.JPG";
import product from "../public/projects/product.JPG";
import crud from "../public/projects/react_crud.JPG";
import pokedex from "../public/projects/pokedex.JPG";
import auth0 from "../public/projects/auth0.JPG";
import techstore from "../public/projects/techstore.JPG";
import stripe from "../public/projects/stripestore.JPG";
import pistache from "../public/projects/Pistache.JPG";
import petcare from "../public/projects/Petcare.JPG";
import saasai from "../public/projects/Saas-Ai.JPG";
import mysqltasks from "../public/projects/mysql_tasks.JPG";
import threejs from "../public/projects/threejs.JPG";
import bootstrap from "../public/skills//bootstrap.png";
import reacti from "../public/skills//react.png";
import mySQL from "../public/skills//mySQL.png";
import html from "../public/skills//html.png";
import auth from "../public/skills//auth0.png";
import dot from "../public/skills//dotenb.png";
import github from "../public/skills//github.png";
import css from "../public/skills//css.png";
import javas from "../public/skills//javascript.png";
import nextjs from "../public/skills//nextjs.png";
import node from "../public/skills//node.png";
import tailw from "../public/skills//tailwind.png";
import mongo from "../public/skills//mongo.png";
import git from "../public/skills//git.png";
import express from "../public/skills//express.png";

export const projects = [
  {
    web: "https://genius-ai-sammyr9526.vercel.app/",
    git: "https://github.com/sammyr9526/Genius-AI",
    src: saasai,
    pill: [
      "React",
      "Typescript",
      "Tailwind",
      "OpenAi",
      "Stripe",
      "Prisma",
      "Clerk",
    ],
  },

  {
    web: "https://tech-store.cyclic.app/",
    git: "https://github.com/sammyr9526/Techstore",
    src: techstore,
    pill: ["Express", "MongoDB", "Handlebars", "JWT", "Tailwind", "Bcrypt"],
  },

  {
    web: "https://threejs-ai-project-sammyr9526.vercel.app/",
    git: "https://github.com/sammyr9526/threejs_ai_project",
    src: threejs,
    pill: ["React", "Three.js", "Express", "OpenAI", "Tailwind"],
  },
  {
    web: "https://react-fb-auth-26a23.firebaseapp.com/login",
    git: "https://github.com/sammyr9526/react-fb-auth",
    src: login,
    pill: ["HTML", "CSS", "React", "Firebase", "Tailwind"],
  },
  {
    web: "https://mongo-tasks-crud.cyclic.app/",
    git: "https://github.com/sammyr9526/Tasks-crud-node-mongodb",
    src: task_mongo,
    pill: ["HTML", "MongoDB", "Express", ".ENV", "Bootstrap"],
  },
  {
    web: "https://sammyr9526.github.io/pokemon-app/",
    git: "https://github.com/sammyr9526/pokemon-app",
    src: pokedex,
    pill: ["React", "Javascript", "CSS"],
  },
  {
    web: "https://beststore.cyclic.app/",
    git: "https://github.com/sammyr9526/BestStore-paypal",
    src: paypal,
    pill: ["HTML", ".ENV", "Express", "Paypal", "Bootstrap"],
  },
  {
    web: "https://react-mysql-task.onrender.com/",
    git: "https://github.com/sammyr9526/react-mysql-task  ",
    src: mysqltasks,
    pill: ["React", "Express", "Mysql", "Tailwind"],
  },
  {
    web: "https://stripe-store-6kdg.onrender.com/",
    git: "https://github.com/sammyr9526/stripe-store",
    src: stripe,
    pill: ["React", "CSS", "Javascript", "Bootstrap", "Stripe"],
  },
  {
    web: "https://react-auth0-app.vercel.app/",
    git: "https://github.com/sammyr9526/react_auth0_app",
    src: auth0,
    pill: ["React", "auth0", "Tailwind"],
  },

  {
    web: "https://react-typescript-tasks.vercel.app/",
    git: "https://github.com/sammyr9526/react-typescript-tasks/",
    src: tasks,
    pill: ["HTML", "CSS", "React"],
  },
  {
    web: "https://sammyr9526.github.io/react-crypto-prices/",
    git: "https://github.com/sammyr9526/react-crypto-prices",
    src: bitcoin,
    pill: ["React", "Bootstrap"],
  },
  {
    web: "https://sammyr9526.github.io/react-rick-and-morty/",
    git: "https://github.com/sammyr9526/react-rick-and-morty",
    src: rick,
    pill: ["React", "Bootstrap"],
  },
  {
    web: "https://sammyr9526.github.io/react-crud-app/",
    git: "https://github.com/sammyr9526/react-crud-app/",
    src: crud,
    pill: ["HTML", "CSS", "React"],
  },
  {
    web: "https://sammyr9526.github.io/html-css-webpage/",
    git: "https://github.com/sammyr9526/html-css-webpage",
    src: phone,
    pill: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    web: "https://sammyr9526.github.io/LandingPage_html/",
    git: "https://github.com/sammyr9526/LandingPage_HTML",
    src: product,
    pill: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },

  {
    web: "https://sammyr9526.github.io/Pet-Care/",
    git: "https://github.com/sammyr9526/Pet-Care",
    src: petcare,
    pill: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    web: "https://sammyr9526.github.io/pistache/",
    git: "https://github.com/sammyr9526/pistache",
    src: pistache,
    pill: ["HTML", "CSS", "Javascript"],
  },
];

export const skills = [
  {
    skill: "HTML",
    src: html,
    id: "html",
  },
  {
    skill: "CSS",
    src: css,
    id: "css",
  },
  {
    skill: "Javascript",
    src: javas,
    id: "js",
  },
  {
    skill: "React",
    src: reacti,
    id: "react",
  },
  {
    skill: "Next js",
    src: nextjs,
    id: "next",
  },
  {
    skill: "Node",
    src: node,
    id: "node",
  },
  {
    skill: "Mongodb",
    src: mongo,
    id: "mongo",
  },
  {
    skill: "Express",
    src: express,
    id: "express",
  },
  {
    skill: "Mysql",
    src: mySQL,
    id: "mysql",
  },

  {
    skill: "Bootstrap",
    src: bootstrap,
    id: "bs",
  },
  {
    skill: "Tailwind CSS",
    src: tailw,
    id: "tw",
  },
  {
    skill: "Auth0",
    src: auth,
    id: "auth",
  },

  {
    skill: "Git",
    src: git,
    id: "git",
  },

  {
    skill: "Github",
    src: github,
    id: "gith",
  },

  {
    skill: "Dotenv",
    src: dot,
    id: "dot",
  },
];

export const navlinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
