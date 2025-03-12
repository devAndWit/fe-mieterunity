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
          console.error("Fehler bei der Anmeldung");
        }
      } catch (error) {
        console.error(error);
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
    console.error("account was deleted");
  };

  return (
    <main>
      <div className={styles.AccountContainer}>
        <div className={styles.AccountHeadline}>
          <h2>Konto</h2>
        </div>
        <div className={styles.AccountWrapper}>
          <div className={styles.SectionContentText}>
            <form
              className={styles.FormData}
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

          <Password></Password>

          <div className={styles.SectionContentText}>
            <div className={styles.SectionContentSingleLine}>
              <div>Du kannst hier dein Konto löschen.</div>
              <div>
                <button type="button" onClick={handleDeleteAccount}>
                  Konto löschen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
