import { Link } from "react-router-dom";
import styles from "../../Header.module.css";

export const Login = () => {
  return (
    <div className={styles.Link}>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Login;
