import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import styles from "../../Header.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Link to="/" className={styles.LogoContent}>
        <img src={logo} alt="website logo" />
        <span>MieterUnity</span>
      </Link>
    </div>
  );
};

export default Logo;
