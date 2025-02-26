import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      });

      if (response.ok) {
        navigate("/");
        console.log("Du bist ausgeloggt.");
      } else {
        console.log("Fehler bei der Anmeldung");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <main>
      <section className={styles.logoutSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Logout</span>
        </div>
      </section>

      <section className={styles.logoutSection}>
        <article className={styles.logoutArticle}>
          <div className={styles.sectionContentText}>
            <span>Möchtest du dich wirklich ausloggen?</span>
            <div className={styles.control}>
              <button className={styles.logoutButton} onClick={handleLogout}>
                ausloggen
              </button>
              <button className={styles.logoutButton} onClick={handleBack}>
                schließen
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Logout;
