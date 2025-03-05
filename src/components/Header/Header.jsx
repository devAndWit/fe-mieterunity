import Nav from "./Nav/Nav.jsx";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar.jsx";

export const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <Nav />
        <Navbar></Navbar>
      </header>
    </>
  );
};

export default Header;
