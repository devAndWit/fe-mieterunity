import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import profil_icon from "../../assets/logo_with_background.png";
import styles from "./Profile.module.css";
import ProfilEntry from "./ProfilEntry";
import { FaChevronLeft } from "react-icons/fa";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

export const Profile = () => {
  const [createdAtString, setCreatedAtString] = useState();
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const [arrow, setArrow] = useState({
    locations: false,
    setting: false,
    password: false,
    account: false,
  });

  const { user } = useContext(AuthContext);

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

  const handleArrowClick = (name) => {
    setArrow((prevArrow) => ({ ...prevArrow, [name]: !arrow[name] }));
    console.log(arrow);
  };

  useEffect(() => {
    const loadUserData = () => {
      setFormData((prevValues) => ({ ...prevValues, ["email"]: user.email }));
    };

    const createCreatedAtString = () => {
      let date = new Date(user.createdAt);

      let datum = date.toLocaleString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setCreatedAtString(datum);
    };
    loadUserData();
    createCreatedAtString();
  }, [user, arrow]);

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

            <ProfilEntry
              name={"Username:"}
              value={
                !formData.username ? "noch nicht festgelegt" : formData.username
              }
            ></ProfilEntry>

            <ProfilEntry name={"Email:"} value={formData.email}></ProfilEntry>

            <ProfilEntry
              name={"angemeldet seit:"}
              value={createdAtString}
            ></ProfilEntry>
          </div>
        </article>
      </section>

      <section className={styles.profileSection}>
        <article className={styles.profileArticle}>
          <div className={styles.sectionContentText}>
            <div className={styles.sectionTitle}>
              <h2>Adressen</h2>
              <FaChevronLeft
                className={
                  arrow.locations ? styles.arrowDown : styles.arrowLeft
                }
                size="2rem"
                name="arrowLocation"
                onClick={() => {
                  handleArrowClick("locations");
                }}
              />
              <div
                className={
                  arrow.locations ? styles.maximized : styles.minimized
                }
              >
                <p>Straße test</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.profileSection}>
        <article className={styles.profileArticle}>
          <div className={styles.sectionContentText}>
            <h2>Adressen</h2>

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
