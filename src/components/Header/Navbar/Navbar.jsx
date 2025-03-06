import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext.jsx";
import styles from "../Header.module.css";

export const Navbar = ({ targetRef, scrollTo }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {!isAuthenticated ? (
        <nav className={styles.Navbar}>
          <ul>
            <li>
              <Link
                onClick={() => {
                  scrollTo(targetRef);
                }}
              >
                Unsere Vision
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  scrollTo(targetRef);
                }}
              >
                Über uns
              </Link>
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
