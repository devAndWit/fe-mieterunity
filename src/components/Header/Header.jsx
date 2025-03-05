import AuthContext from "../../contexts/AuthContext.jsx";
import Nav from "./Nav/Nav.jsx";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar.jsx";
import Menu from "./Menu/Menu.jsx";
import { useContext } from "react";

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <header className={styles.Header}>
        <Nav />
        {isAuthenticated ? (
          <>
            <Menu />
          </>
        ) : (
          <>
            <Navbar />
          </>
        )}
      </header>
    </>
  );
};

export default Header;
