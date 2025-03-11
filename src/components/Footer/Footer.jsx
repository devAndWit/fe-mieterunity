import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/legalnotice">Impressum</Link>
        </li>
        <div className={styles.ArrowUp}>
          <a href="#idHeader">
            <FaChevronUp size="1.5rem" />
          </a>
        </div>
        <li>
          <Link to="/privacypolicy">Datenschutz</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
