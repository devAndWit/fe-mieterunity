import { IoMdPerson } from "react-icons/io";
import { IconContext } from "react-icons";

export const Navbar = () => {
  return (
    <nav className="">
      <ul className="">
        <li className="">
          <a href="/#vision">Unsere Vision</a>
        </li>
        <li className="">
          <a href="/#about">Über uns</a>
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
                style: { verticalAlign: "middle" },
              }}
            >
              <IoMdPerson />
            </IconContext>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
