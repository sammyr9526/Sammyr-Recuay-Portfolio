import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const social = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={30} className=" " />
      </>
    ),
    href: "https://www.linkedin.com/in/sammyr-recuay-parra-74298a253/",
    style: "border-top: 6px",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} className=" " />
      </>
    ),
    href: "https://github.com/sammyr9526",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} className=" " />
      </>
    ),
    href: "mailto:sammyr.recuay@gmail.com",
    style: "border-top: 6px",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} className=" " />
      </>
    ),
    href: "./sammyr_recuay_resume.pdf",
    style: "border-top: 6px",
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <div className=" d-none d-lg-block social ">
      <ul>
        {social.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"social_li d-flex w-100 bg-light " + "" + style}
          >
            <a
              href={href}
              className="social_a justify-content-between  w-100 text-white "
              target={"_blank"}
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
