import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <main>
      <h1>Seite nicht gefunden</h1>
      <section className={styles.NotFoundSection}>
        <Link to="/">weiter</Link>
      </section>
    </main>
  );
};

export default NotFound;
