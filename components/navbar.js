import Link from "next/link";
import { useState } from "react";
import { navlinks } from "../helpers/helpers";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("Home");
  return (
    <nav className="navigation navbar navbar-expand-lg navbar-dark bg-dark  ">
      <div className="container-fluid ">
        <Link href="/">
          <a className="navbar-brand ms-4 fs-4 ">Sammyr Recuay</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            {navlinks.map((item) => (
              <li
                className="nav-item"
                key={item.title}
                onClick={() => setSelectedNav(item.title)}
              >
                <Link href={item.url}>
                  <a className="link fw-bolder" aria-current="page">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
