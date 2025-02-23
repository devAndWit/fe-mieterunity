import { Link } from "react-router";
import { IoMdPerson } from "react-icons/io";
import { IconContext } from "react-icons";
import logo from "../assets/logo.png";

import "./style-desktop.css";

export const Header = () => {
  return (
    <header>
      <div className="MenuContainer hidden">
        <div className="cross"></div>
        <menu>
          <h2>Menu</h2>
          <nav>
            <ul>
              <li>
                <Link to="/profil">Profil</Link>
              </li>

              <li>
                <Link to="/threds">Threads</Link>
              </li>

              <li>
                <Link to="/messages">Messages</Link>
              </li>

              <li>
                <Link to="/share">Share</Link>
              </li>

              <hr />

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/signup">signup</Link>
              </li>

              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
        </menu>
      </div>

      <div className="NavContainer flex">
        <div className="NavTitle">
          <Link to="/">
            <img className="" src={logo} alt="" />
            <span>MieterUnitiy</span>
          </Link>
        </div>
        <div className="NavLinks">
          <nav className="">
            <ul className="">
              <li className="">
                <a href="/mission">Unsere Mission</a>
              </li>
              <li className="">
                <a href="/about">Über uns</a>
              </li>
              <li className="">
                <a href="/contact">Kontakt</a>
              </li>
              <li className="profil">
                <a href="/profile" className="profil-icon">
                  {/* <a href="/login" className="profil-icon"></a> */}
                  <IconContext
                    value={{
                      size: "2rem",
                      className: "global-class-name",
                      style: { verticalAlign: "middle" },
                    }}
                  >
                    <IoMdPerson />
                  </IconContext>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
