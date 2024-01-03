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
