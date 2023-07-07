import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-center bg-light text-white foot d-flex justify-content-between">
      <div className="d-flex foot-p mb-1  ">
        <p className="ms-2 ">
          <AiOutlineCopyrightCircle size={17} className="mb-1 me-1" />
          2023. Sammyr Recuay Parra
        </p>
      </div>
      <div className=" foot-links justify-content-center">
        <a href="https://github.com/sammyr9526" target={"_blank"}>
          <FaGithub size={20} className=" mt-4  foot-icon " />
        </a>

        <a
          href="https://www.linkedin.com/in/sammyr-recuay-parra-74298a253/"
          target={"_blank"}
        >
          <FaLinkedin size={20} className=" mt-4  foot-icon" />
        </a>

        <a href="https://www.facebook.com/samir.recuay" target={"_blank"}>
          <FaFacebook size={20} className=" mt-4  foot-icon" />
        </a>

        <a href="mailto:sammyr.recuay@gmail.com" target={"_blank"}>
          <FiMail size={20} className=" mt-4  foot-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

/*     <a
        href="https://www.linkedin.com/in/sammyr-recuay-parra-74298a253/"
        target="_blank"
        className=" ms-2 me-2 mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="foot-icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
        </svg>
      </a>
      <a
        href="https://github.com/sammyr9526"
        target="_blank"
        className="ms-2 me-2 mt-4"
      >
        <svg
          class="foot-icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/samir.recuay"
        target="_blank"
        className="ms-2 me-2 mt-4"
      >
        <svg
          class="foot-icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <a
        href="mailto:sammyr.recuay@gmail.com"
        target="_blank"
        className="ms-2 me-2 mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="foot-icon"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
        </svg>
      </a> */
