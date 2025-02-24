import styles from "../styles/components/main.module.css";

export const Contact = () => {
  return (
    <main className={styles.main}>
      <h1>Kontakt - MieterUnity</h1>
      <section>
        <article>
          <h2>Kontaktieren Sie uns</h2>
          Wir freuen uns, von Ihnen zu hören! Bei MieterUnity sind wir stets
          daran interessiert, Ihre Fragen, Anregungen oder Ideen zu hören. Egal,
          ob Sie Unterstützung bei der Nutzung unserer Plattform benötigen oder
          einfach nur mit uns in Kontakt treten möchten – wir sind hier, um zu
          helfen!
        </article>
        <article>
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
          Wir bemühen uns, Ihre Nachricht so schnell wie möglich zu beantworten.
        </article>
        <article>
          <h2>Formular</h2>
          <form action="">
            <p>
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" id="email" />
            </p>
            <p>
              <label htmlFor="message">Nachricht:</label>
              <textarea name="message" id="message"></textarea>
            </p>

            <button>Versenden</button>
          </form>
        </article>

        <article>
          <h2>Folgt uns</h2>
          Bleiben Sie auch auf dem Laufenden und folgen Sie uns auf unseren
          Social-Media-Kanälen! Dort teilen wir Neuigkeiten, Tipps und spannende
          Entwicklungen rund um MieterUnity:
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
        </article>

        <article>
          Wir freuen uns darauf, mit Ihnen in Kontakt zu treten und gemeinsam
          eine starke Nachbarschaft aufzubauen!
        </article>
        <article>Euer MieterUnity-Team</article>
      </section>
    </main>
  );
};

export default Contact;
