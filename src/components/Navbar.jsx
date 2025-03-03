import { IoMdPerson } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="">
      <ul className="">
        <li className="">
          <Link to="/#vision">Unsere Vision</Link>
        </li>
        <li className="">
          <Link to="/#about">Über uns</Link>
        </li>
        <li className="">
          <Link to="/contact">Kontakt</Link>
        </li>
        <li className="profil">
          <Link to="/profile">
            <IconContext
              value={{
                size: "2rem",
                style: { verticalAlign: "middle" },
              }}
            >
              <IoMdPerson />
            </IconContext>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
