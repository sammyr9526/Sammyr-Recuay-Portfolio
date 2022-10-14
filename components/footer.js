import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-center bg-light text-white foot d-block   ">
      <a href="https://github.com/sammyr9526" target={"_blank"}>
        <FaGithub size={30} className="ms-2 me-2 mt-4 text-white" />
      </a>

      <a href="https://linkedin.com" target={"_blank"}>
        <FaLinkedin size={30} className="ms-2 me-2 mt-4 text-white" />
      </a>

      <a href="https://facebook.com" target={"_blank"}>
        <FaFacebook size={30} className="ms-2 me-2 mt-4 text-white" />
      </a>

      <a href="mailto:sammyr.recuay@gmail.com" target={"_blank"}>
        <FiMail size={30} className="ms-2 me-2 mt-4 text-white" />
      </a>

      <p className="mt-4 ">
        <AiOutlineCopyrightCircle />
        2022, Sammyr Recuay
      </p>
    </footer>
  );
};

export default Footer;
