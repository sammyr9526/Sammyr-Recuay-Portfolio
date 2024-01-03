import Image from "next/image";
import { sampleProjects, skills } from "../helpers/helpers";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import prog from "../public/writingcode.jpg";
import Contact from "./contact";
import ProjectsList from "../components/ProjectsList";

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
      <div className="container text-center  ">
        <h3>About Me</h3>
        <motion.div
          className="row mt-5 px-4 mx-auto about_container   "
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.5,
          }}
        >
          <div className="col-md-7 ">
            <code>
              <motion.h1 className="fw-bolder text-title about_title">
                Hello World
              </motion.h1>
            </code>

            <motion.p className="about_p" ref={ref}>
              I'm Sammyr Recuay, a web developer from Peru. I'm very curious and
              passionate about everything related to computers and technology.
              <br />
              <br />
              Currently i am using MERN stack to develop but not restricted to
              it. I always love exploring and learning new technologies to
              improve my skills
            </motion.p>
          </div>
          <motion.div className="col-md-5 d-flex justify-content-center prog_img  ">
            <Image
              src={prog}
              className="img-fluid rounded-circle"
              width={350}
              height={350}
            />
          </motion.div>
        </motion.div>
      </div>

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
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Image src={src} alt="img" width={70} height={80} />
                <p>{skill} </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PROJECTS */}

      <ProjectsList projects={sampleProjects} exitOption={"null"} />

      <div className=" text-center ">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="/projects"
          className="projects_btn btn card_btn btn-lg shadow-none   "
        >
          More Projects
        </motion.a>
      </div>

      {/* CONTACT ME */}

      <Contact />
    </>
  );
}
