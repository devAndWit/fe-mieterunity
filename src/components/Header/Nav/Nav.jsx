import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext.jsx";
import Login from "./NavElements/Login.jsx";
import SignUp from "./NavElements/SignUp.jsx";
import Logout from "./NavElements/Logout.jsx";
import Logo from "./NavElements/Logo.jsx";
import styles from "../Header.module.css";

export const Nav = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <nav className={styles.Nav}>
      <div className={styles.NavLeft}>
        <Logo />
      </div>
      <div className={styles.NavRight}>
        {isAuthenticated ? (
          <>
            <Logout />
          </>
        ) : (
          <>
            <Login />
            <SignUp />
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
