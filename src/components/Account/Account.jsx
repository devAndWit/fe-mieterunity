import { Link } from "react-router-dom";
import styles from "./Account.module.css";

export const Account = () => {
  return (
    <main>
      <h1>Konto</h1>
      <section>
        <p>
          erstellt am: 25.02.2025
        </p>
        <form action="" method="POST" className={styles.AccountForm}>
          <p>
            <label htmlFor="firstname">Vorname:</label>
            <input type="text" name="firstname" id="firstname" />
          </p>

          <p>
            <label htmlFor="lastname">Nachname:</label>
            <input type="text" name="lastname" id="lastname" />
          </p>

          <p>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" id="phone" />
          </p>

          <p>
            <button type="button">Speichern</button>
            <Link to="/profile">Close</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Account;
