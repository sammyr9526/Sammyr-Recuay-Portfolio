import Layout from "../components/layout";
import { motion } from "framer-motion";
import Image from "next/image";
import { container, item } from "../pages/index";
import { projects } from "./helpers";

const Projects = () => (
  <>
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
            className="row text-center justify-content-center  "
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map(({ web, git, src, pill }, index) => (
              <motion.div
                className="card-group col-10 col-sm-8 col-md-5 col-lg-4 m-3 overflow"
                key={index}
                variants={item}
              >
                <div className="card">
                  <Image src={src} alt="img" className="card-img-top" />
                  <div className="card-body">
                    <div className=" h-50  ">
                      {pill.map((e) => (
                        <div className="d-inline-flex" key={e}>
                          <button
                            className=" btn btn-primary btn-sm ms-1 me-1 mb-3"
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </>
);
export default Projects;
