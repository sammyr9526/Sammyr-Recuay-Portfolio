import Layout from "../components/layout";
import { motion } from "framer-motion";

const Contact = () => (
  <Layout>
    <motion.div
      className="container"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={[{ duration: 0.75 }, { delay: 5 }]}
      id="contact"
    >
      <div className="row justify-content-center text-center ">
        <h3>Contact Me</h3>
        <div className="col-md-6 col-lg-5 ">
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
                  className="form-control contact-form shadow-none rounded bg-light"
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
  </Layout>
);

export default Contact;
