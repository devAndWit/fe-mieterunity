import { useState } from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    address: "",
    title: "",
    text: "",
  });

  const [sendMsg, setSendMsg] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSendMsg("");
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.address && formData.title && formData.text) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSendMsg("Danke. Deine Nachricht wurde versendet.");
          setFormData({ address: "", title: "", text: "" });
        } else {
          setSendMsg("Deine Nachricht wurde nicht versendet!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main>
      <section className={styles.contactSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Kontakt - MieterUnity</span>
        </div>
      </section>

      <section className={styles.contactSection}>
        <article className={styles.contactArticle}>
          <div className={styles.sectionContentText}>
            <h2 data-categorie="1">Kontaktieren Sie uns</h2>
            Wir freuen uns, von Ihnen zu hören! Bei MieterUnity sind wir stets
            daran interessiert, Ihre Fragen, Anregungen oder Ideen zu hören.
            Egal, ob Sie Unterstützung bei der Nutzung unserer Plattform
            benötigen oder einfach nur mit uns in Kontakt treten möchten – wir
            sind hier, um zu helfen!
          </div>
        </article>
      </section>

      <section className={styles.contactSection}>
        <article className={styles.contactArticle}>
          <div className={styles.sectionContentText}>
            <h2>Email</h2>
            Sie können uns jederzeit per E-Mail erreichen unter:
            <br />
            <a
              className="ext-link"
              href="mailto:info@mieterunity.de"
              target=""
              rel="noopener noreferrer"
            >
              info@mieterunity.de
            </a>
            <br />
            Wir bemühen uns, Ihre Nachricht so schnell wie möglich zu
            beantworten.
          </div>
        </article>
      </section>

      <section className={styles.contactSection}>
        <article className={styles.contactArticle}>
          <div className={styles.sectionContentText}>
            <h2>Formular</h2>
            <form
              action=""
              method="Post"
              onSubmit={handleFormSubmit}
              className={styles.formData}
            >
              <p>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Titel"
                  name="title"
                  value={formData.title}
                  onChange={handleInput}
                  required
                />
              </p>
              <p>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Email"
                  name="address"
                  value={formData.address}
                  onChange={handleInput}
                  required
                />
              </p>
              <p>
                <label htmlFor="message">Nachricht:</label>
                <textarea
                  id="text"
                  placeholder="Nachricht"
                  name="text"
                  value={formData.text}
                  onChange={handleInput}
                  required
                ></textarea>
              </p>

              <p className={styles.sendMsg}>{sendMsg}</p>
              <p>
                <button>Versenden</button>
              </p>
            </form>
          </div>
        </article>
      </section>

      <section className={styles.contactSection}>
        <article className={styles.contactArticle}>
          <div className={styles.sectionContentText}>
            <h2>Folgt uns</h2>
            Bleiben Sie auch auf dem Laufenden und folgen Sie uns auf unseren
            Social-Media-Kanälen! Dort teilen wir Neuigkeiten, Tipps und
            spannende Entwicklungen rund um MieterUnity:
            <br />
            <br />
            Instagram:
            <a className="ext-link" href="" target="" rel="noopener noreferrer">
              @mieterunity
            </a>
            <br />
            Telegram:
            <a className="ext-link" href="" target="" rel="noopener noreferrer">
              MieterUnity Channel
            </a>
            <br />
            Facebook:
            <a className="ext-link" href="" target="" rel="noopener noreferrer">
              MieterUnity Facebook-Seite
            </a>
          </div>
        </article>
      </section>

      <section className={styles.contactSection}>
        <article className={styles.contactArticle}>
          <div className={styles.sectionContentText}>
            Wir freuen uns darauf, mit Ihnen in Kontakt zu treten und gemeinsam
            eine starke Nachbarschaft aufzubauen!
            <br />
            <br />
            Euer MieterUnity-Team
          </div>
        </article>
      </section>
    </main>
  );
};

export default Contact;
