import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <ul>
        <li>
          <Link to="/legalnotice">Impressum</Link>
        </li>
        <li>
          <Link to="/privacypolicy">Datenschutz</Link>
        </li>
      </ul>
      <div className={styles.ArrowUp}>
        <a href="#idHeader">
          <FaChevronUp size="1.5rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
