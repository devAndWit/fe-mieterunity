import { Link } from "react-router";

import { Navbar } from "./Navbar.jsx";
import logo from "../assets/logo.png";
import "./style-desktop.css";

export const Header = () => {
  return (
    <header id="idHeader">
      <div className="NavContainer flex">
        <div className="NavTitle">
          <Link to="/">
            <img className="" src={logo} alt="" />
            <span>MieterUnitiy</span>
          </Link>
        </div>
        <div className="NavLinks">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
