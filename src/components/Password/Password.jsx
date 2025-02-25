import { Link } from "react-router";
import styles from "./Password.module.css";

export const Password = () => {
  return (
    <main className={styles.PasswordContainer}>
      <h1>Passwort</h1>
      <section>
        <form action="" method="POST">
          <b>Hier können Sie ihr Passwort ändern</b>
          <p>
            <label htmlFor="">Passwort</label>
            <input type="password" name="password" id="password" />
          </p>
          <p>
            <label htmlFor="">Passwort Wiederholung</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
            />
          </p>
          <p>
            <button type="submit">Speichern</button>
            <Link to="/profile">Schliessen</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Password;
