import Layout from "../components/layout";
import { motion } from "framer-motion";
import Image from "next/image";
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
import { container, item } from "../pages/index";
export const projects = [
  {
    web: "https://react-typescript-tasks.vercel.app/",
    git: "https://github.com/sammyr9526/react-typescript-tasks/",
    src: tasks,
    pill: ["html", "css", "react"],
  },

  {
    web: "https://sammyr9526.github.io/react-crypto-prices/",
    git: "https://github.com/sammyr9526/react-crypto-prices",
    src: bitcoin,
    pill: ["react", "bootstrap"],
  },

  {
    web: "https://sammyr9526.github.io/react-rick-and-morty/",
    git: "https://github.com/sammyr9526/react-rick-and-morty",
    src: rick,
    pill: ["react", "bootstrap"],
  },
  {
    web: "https://react-fb-auth-26a23.firebaseapp.com/login",
    git: "https://github.com/sammyr9526/react-fb-auth",
    src: login,
    pill: ["html", "css", "react", "firebase", "tailwind"],
  },

  {
    web: "https://mongo-tasks-crud.cyclic.app/",
    git: "https://github.com/sammyr9526/Tasks-crud-node-mongodb",
    src: task_mongo,
    pill: ["html", "mongo", "express", "dotenv", "bootstrap"],
  },

  {
    web: "https://beststore.cyclic.app/",
    git: "https://github.com/sammyr9526/BestStore-paypal",
    src: paypal,
    pill: ["html", "node", "express", "dotenv", "bootstrap"],
  },

  {
    web: "https://sammyr9526.github.io/html-css-webpage/",
    git: "https://github.com/sammyr9526/html-css-webpage",
    src: phone,
    pill: ["html", "css", "javascript", "bootstrap"],
  },

  {
    web: "https://sammyr9526.github.io/react-crud-app/",
    git: "https://github.com/sammyr9526/react-crud-app/",
    src: crud,
    pill: ["html", "css", "react"],
  },

  {
    web: "https://sammyr9526.github.io/LandingPage_html/",
    git: "https://github.com/sammyr9526/LandingPage_html",
    src: product,
    pill: ["html", "css", "javascript", "bootstrap"],
  },
  {
    web: "https://sammyr9526.github.io/pokemon-app/",
    git: "https://github.com/sammyr9526/pokemon-app",
    src: pokedex,
    pill: ["react", "javascript", "css"],
  },
];

const Projects = () => (
  <Layout>
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <div className="  mb-5  ">
        <h3 className="text-center">Projects</h3>
        <div className="col-md-14 mt-5 ">
          <motion.div
            className="row text-center justify-content-center "
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map(({ web, git, src, pill }, index) => (
              <motion.div
                className="col-sm-5  col-lg-4 me-3  mb-5 me-3 ms-3  col-9 overflow "
                key={index}
                variants={item}
              >
                <div className="card h-100  ">
                  <Image src={src} alt="img" className="card-img-top" />
                  <div className="card-body mt-1 mb-1  ">
                    {pill.map((e) => (
                      <div className="d-inline-flex" key={e}>
                        <button
                          className=" btn btn-primary btn-sm ms-1 me-1 mb-3   "
                          disabled
                        >
                          {e}
                        </button>
                      </div>
                    ))}
                    <div>
                      <a
                        href={web}
                        className="btn btn-outline-dark me-2 shadow-none"
                        target={"_blank"}
                      >
                        web
                      </a>
                      <a
                        href={git}
                        className="btn btn-outline-dark ms-2 shadow-none"
                        target={"_blank"}
                      >
                        github
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </Layout>
);
export default Projects;
