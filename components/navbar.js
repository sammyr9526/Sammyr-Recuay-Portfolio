import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navigation navbar navbar-expand-lg navbar-dark bg-dark  ">
      <div className="container-fluid ">
        <a className="navbar-brand ms-4  " href="#">
          Sammyr Recuay
        </a>
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
            <li className="nav-item  ">
              <Link href="/">
                <a className="link  " aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item  ">
              <Link href="/projects">
                <a className="link">Projects</a>
              </Link>
            </li>
            <li className="nav-item  ">
              <Link href="/contact">
                <a className="link ">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
