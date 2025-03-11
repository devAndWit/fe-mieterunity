import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext.jsx";
import styles from "../Header.module.css";

export const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {!isAuthenticated ? (
        <nav className={styles.Navbar}>
          <ul>
            <li>
              <Link>Unsere Vision</Link>
            </li>
            <li>
              <Link>Über uns</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
