import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import styles from "../../Header.module.css";

export const Logout = () => {
  return (
    <div className={styles.Link}>
      <IoMdPerson size="2rem" />
      <Link to="/logout">logout</Link>
    </div>
  );
};

export default Logout;
