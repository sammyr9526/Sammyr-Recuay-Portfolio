import Image from "next/image";
import { projects as proj, skills } from "../helpers/helpers";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import prog from "../public/writingcode.jpg";
import Contact from "./contact";

export const container = {
  hidden: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
  },
};

export default function Index() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "just",
          duration: 1.25,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100%",
      });
    }
  }, [inView]);
  return (
    <>
      {/* ABOUT */}
      <motion.div className="container text-center">
        <h3>About Me</h3>
        <div className="row mt-5 px-4 mx-auto about ">
          <div className="col-md-7 ">
            <motion.h1
              className="fw-bolder"
              initial={{ x: 75, y: -100 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 1.5,
              }}
            >
              <code className="text-dark"> Hello World</code>
            </motion.h1>

            <motion.p
              className="about_p"
              ref={ref}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                type: "just",
                duration: 1.25,
              }}
            >
              I'm Sammyr Recuay, a web developer from Peru. I'm very curious and
              passionate about everything related to computers and technology.
              <br />
              <br />
              Currently i am using MERN stack to develop but not restricted to
              it. I always love exploring and learning new technologies to
              improve my skills
            </motion.p>
          </div>
          <motion.div
            className="col-md-5 d-flex justify-content-center prog_img  "
            animate={{
              scale: [1, 1.2, 1, 1.2, 1],
              rotate: [0, 0, 270, 270, 0],
              x: 0,
              y: 0,
            }}
            initial={{ x: [120, 70, -200, -300], y: [-50, -250] }}
            transition={{ duration: 1.75, times: 3, type: "spring" }}
          >
            <Image
              src={prog}
              className="img-fluid rounded-circle"
              width={350}
              height={350}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className=" container skills ">
        <h3 className="mb-5 text-center">Skills</h3>

        <motion.div className="row text-center grid justify-content-center">
          {skills.map(({ skill, src, id }) => (
            <motion.div
              className="col-lg-3  me-3 col-4  mb-5 me-3 ms-3 logo"
              id={id}
              key={id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Image src={src} alt="img" width={70} height={80} />
                <p>{skill} </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Portfolio */}
      <motion.div className="container">
        <div className="  mb-5  ">
          <h3 className="text-center">Projects</h3>
          <div className="col-md-14 mt-5 ">
            <motion.div
              whileInView="show"
              viewport={{ once: true }}
              className="row text-center justify-content-center "
              variants={container}
              initial="hidden"
            >
              {proj.slice(0, 6).map(({ web, git, src, pill }, index) => (
                <motion.div
                  className="col-10 col-sm-8 col-md-5 col-lg-3 me-3 mb-5 me-3 ms-3  overflow "
                  key={index}
                  variants={item}
                >
                  <div className="card h-100 ">
                    <Image src={src} alt="img" className="card-img-top" />
                    <div className="card-body mt-1 mb-1 ">
                      <div className="h-50">
                        {pill.map((e) => (
                          <div className="d-inline-flex" key={e}>
                            <button
                              className=" card_skill btn-sm ms-1 me-1 mb-3"
                              disabled
                            >
                              {e}
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="h-50 d-flex justify-content-evenly">
                        <div className="align-self-end">
                          <a
                            href={web}
                            className="btn card_btn me-2"
                            target={"_blank"}
                          >
                            web
                          </a>
                          <a
                            href={git}
                            className="btn card_btn ms-2 "
                            target={"_blank"}
                          >
                            github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className=" text-center ">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className=" btn card_btn btn-lg shadow-none   "
              >
                More Projects
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONTACT ME */}

      <Contact />
    </>
  );
}
