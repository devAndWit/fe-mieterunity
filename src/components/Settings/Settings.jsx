import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Settings.module.css";

export const Settings = () => {
  const [formData, setFormData] = useState({
    darkMode: false,
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
          setFormData({ email: "", password: "" });
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

  return (
    <main>
      <div className={styles.SettingsContainer}>
        <div className={styles.SettingsHeadline}>
          <h2>Einstellungen</h2>
        </div>

        <section className={styles.settingsSection}>
          <article className={styles.settingsArticle}>
            <div className={styles.sectionContentText}>
              <form
                className={styles.formData}
                onSubmit={handleSubmit}
                method="POST"
              >
                <p>
                  <label htmlFor="darkmode">DarkMode</label>
                  <input
                    type="checkbox"
                    name="darkmode"
                    id="darkmode"
                    value={formData.darkMode}
                    onChange={handleInput}
                  />
                </p>
                <p>
                  <button type="submit">Speichern</button>
                  <button onClick={handleClose}>Schließen</button>
                </p>
              </form>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Settings;
