import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import styles from "./LoginBar.module.css";

export const LoginBar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div className={styles.LoginBar}>
        {isAuthenticated === true ? (
          <Link to="/logout" className={styles.Link}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" className={styles.Link}>
              Login
            </Link>
            <Link to="/signup" className={styles.Link}>
              Signup
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default LoginBar;
