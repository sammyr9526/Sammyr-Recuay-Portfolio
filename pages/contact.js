import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Contact() {
  const ref2 = useRef(null);
  const inView2 = useInView(ref2);
  const animation2 = useAnimation();
  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView2) {
      animation2.start({
        x: "-100%",
      });
    }
  }, [inView2]);
  return (
    <motion.div
      className="container"
      ref={ref2}
      animate={animation2}
      id="contact"
    >
      <div className="row justify-content-center text-center ">
        <h3>Contact Me</h3>
        <div className="col-md-8 col-lg-5 text-start">
          <form
            className="card my-4  rounded text-start"
            action="https://getform.io/f/5fb0a6ee-c5d7-462a-8c01-c749438d81a2"
            method="POST"
          >
            <div className="card-body ">
              <div className="form-group form-floating mb-3  ">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control contact-form shadow-none rounded bg-light text-white"
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
                  className="form-control contact-form shadow-none bg-light  "
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
                  className="form-control contact-form shadow-none bg-light"
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
    </motion.div>
  );
}
