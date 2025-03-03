import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    logout();
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
