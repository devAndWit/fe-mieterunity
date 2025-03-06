import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext.jsx";

import styles from "./Menu.module.css";

export const Menu = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <menu className={styles.Menu}>
        {isAuthenticated ? (
          <Link to="/profile/dashboard">Dashboard</Link>
        ) : (
          <></>
        )}
      </menu>
    </>
  );
};

export default Menu;
