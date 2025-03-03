import { Link } from "react-router-dom";

import { Navbar } from "./Navbar.jsx";
import { LoginBar } from "../components/LoginBar/LoginBar.jsx";

import logo from "../assets/logo.png";
import "./style-desktop.css";

export const Header = () => {
  return (
    <header id="idHeader">
      <div className="NavContainer">
        <div className="NavTitle">
          <Link to="/">
            <img className="" src={logo} alt="" />
            <span>MieterUnitiy</span>
          </Link>
        </div>
        <div className="NavLinks">
          <Navbar />
        </div>
        <div>
          <LoginBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
