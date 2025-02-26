import { Link } from "react-router";
import profil_icon from "../../assets/logo_with_background.png";
import styles from "./Profile.module.css";
import { useState } from "react";

export const Profile = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username && formData.phone && formData.email) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("user updated");
        } else {
          console.log("error in updateprocess");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="UserProfil">
      <section className={styles.profileSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Benutzer</span>
        </div>
      </section>

      <section className={styles.profileSection}>
        <article className={styles.profileArticle}>
          <div className={styles.sectionContentText}>
            <h2>Benutzerdaten</h2>
            <div className={styles.userProfilImage}>
              <figure>
                <img src={profil_icon} alt="userprofile image" />
              </figure>
              <button>Profilbild ändern</button>
            </div>

            <form className={styles.formData} onSubmit={handleSubmit}>
              <p>
                <label htmlFor="username">Benutzername:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Benutzername"
                  name="username"
                  value={formData.username}
                  onChange={handleInput}
                />
              </p>

              <p>
                <label htmlFor="mail">Email:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </p>

              <p>
                <label htmlFor="phone">Telefon:</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Telefon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInput}
                />
              </p>

              <p>
                <button>Speichern</button>
              </p>
            </form>
          </div>
        </article>
      </section>

      <section className={styles.profileSection}>
        <article className={styles.profileArticle}>
          <div className={styles.sectionContentText}>
            <h2>weitere Daten</h2>
            <div className={styles.profileLinkList}>
              <p>
                <span>Standort:</span>
                <Link to="/profile/locations">Standort</Link>
              </p>
              <p>
                <span>Einstellungen:</span>
                <Link to="/profile/settings">Einstellungen</Link>
              </p>
              <p>
                <span>Passwort:</span>
                <Link to="/profile/password">Passwort</Link>
              </p>

              <p>
                <span>Konto:</span>
                <Link to="/profile/account">Konto</Link>
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Profile;
