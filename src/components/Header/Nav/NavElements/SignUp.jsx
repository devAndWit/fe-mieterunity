import { Link } from "react-router-dom";
import styles from "../../Header.module.css";
export const SignUp = () => {
  return (
    <div className={styles.Link}>
      <Link to="/signUp">Signup</Link>
    </div>
  );
};

export default SignUp;
