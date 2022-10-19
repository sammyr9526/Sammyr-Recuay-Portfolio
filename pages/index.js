import Layout from "../components/layout";
import Image from "next/image";
import { projects as proj } from "./projects";
import { useState } from "react";
import { motion } from "framer-motion";
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
import prog from "../public/writingcode.jpg";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.75,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: {
    whileInView: 1,
    opacity: 1,
  },
};

const skills = [
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
    skill: "DorEnv",
    src: dot,
    id: "dot",
  },
];

export default function Index() {
  const [isInView, setIsInView] = useState(false);

  return (
    <Layout>
      {/* ABOUT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container text-center"
      >
        <h3 className="">About Me</h3>
        <div className="row mt-5 px-4 mx-auto about ">
          <div className="col-md-7 ">
            <h1 className="fw-bolder">
              <code className="text-dark"> Hello World</code>
            </h1>

            <p className="about_p">
              I'm Sammyr Recuay, a web developer from Peru. I'm very curious and
              passionate about everything related to computers and technology.
              <br />
              <br />
              Currently i am using MERN stack to develop but not restricted to
              it. I always love exploring and learning new technologies to
              improve my skills
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center prog_img ">
            <Image
              src={prog}
              className="img-fluid rounded-circle"
              width={350}
              height={350}
            />
          </div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className=" container skills">
        <h3 className="mb-5 text-center">Skills</h3>

        <div className="row text-center grid justify-content-center     ">
          {skills.map(({ skill, src, id }) => (
            <div
              className="col-lg-3  me-3 col-4  mb-5 me-3 ms-3 logo"
              id={id}
              key={id}
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Image src={src} alt="img" width={70} height={80} />
                <p>{skill} </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <motion.div
        className="container "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="  mb-5  ">
          <h3 className="text-center">Projects</h3>
          <div className="col-md-14 mt-5 ">
            <motion.div
              whileInView={() => {
                {
                  setIsInView(true);
                  return {};
                }
              }}
              className="row text-center justify-content-center "
              variants={container}
              initial="hidden"
              animate={isInView && "show"}
            >
              {proj.slice(0, 6).map(({ web, git, src, pill }, index) => (
                <motion.div
                  className="col-sm-5  col-lg-3  me-3  mb-5 me-3 ms-3  col-9 overflow "
                  key={index}
                  variants={item}
                >
                  <div className="card h-100 ">
                    <Image src={src} alt="img" className="card-img-top" />
                    <div className="card-body mt-1 mb-1 ">
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
            <div className=" text-center">
              <a
                href="/projects"
                className=" btn btn-outline-dark btn-lg shadow-none   "
              >
                More Projects
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONTACT ME */}

      <div className="container " id="contact">
        <div className="row justify-content-center text-center ">
          <h3>Contact Me</h3>
          <div className="col-md-6 col-lg-5 text-start">
            <form
              className="card my-4"
              action="https://getform.io/f/5fb0a6ee-c5d7-462a-8c01-c749438d81a2"
              method="POST"
            >
              <div className="card-body">
                <div className="form-group form-floating mb-3  ">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control shadow-none rounded bg-light"
                    id="floatingInput"
                    required
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-group form-floating mb-3 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control shadow-none bg-light "
                    id="floatingEmail"
                    required
                  />
                  <label htmlFor="floatingEmail">Email </label>
                </div>
                <div className="form-group form-floating mb-3">
                  <textarea
                    name="message"
                    cols="20"
                    rows="10"
                    placeholder="Message"
                    className="form-control shadow-none bg-light"
                    id="floatingMessage"
                    required
                  ></textarea>
                  <label htmlFor="floatingMessage">Message</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary d-block w-100 shadow-none"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
    </Layout>
  );
}
