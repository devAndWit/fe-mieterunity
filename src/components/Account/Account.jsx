import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Password from "..//Password/Password.jsx";
import styles from "./Account.module.css";

export const Account = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({ firstname: "", lastname: "", phone: "" });
        } else {
          console.log("Fehler bei der Anmeldung");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleClose = () => {
    navigate("/profile");
  };

  const handleDeleteAccount = () => {
    console.log("account was deleted");
  };

  return (
    <main>
      <section className={styles.accountSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Konto</span>
        </div>
      </section>

      <section className={styles.accountSection}>
        <article className={styles.accountArticle}>
          <div className={styles.sectionContentText}>
            <form
              className={styles.formData}
              onSubmit={handleSubmit}
              method="POST"
            >
              <p>
                <label htmlFor="firstname">Vorname:</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInput}
                />
              </p>

              <p>
                <label htmlFor="lastname">Nachname:</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInput}
                />
              </p>

              <p>
                <label htmlFor="phone">Telefon:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInput}
                />
              </p>

              <p>
                <button type="submit">Speichern</button>
                <button type="button" onClick={handleClose}>
                  Abbrechen
                </button>
              </p>
            </form>
          </div>
        </article>
      </section>

      <Password></Password>

      <section className={styles.accountSection}>
        <article className={styles.accountArticle}>
          <div className={styles.sectionContentText}>
            <b className={styles.accountTextCenter}>
              Du kannst hier dein Konto löschen.
            </b>
            <button type="button" onClick={handleDeleteAccount}>
              Konto löschen
            </button>
          </div>
        </article>
      </section>

    </main>
  );
};

export default Account;
