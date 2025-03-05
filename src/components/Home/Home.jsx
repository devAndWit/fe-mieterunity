import { useEffect, useState } from "react";
import house_01 from "../../assets/house_01_pixabay.jpg";
import YesNoDialog from "../Misc/Dialogs/YesNoDialog.jsx";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <main>
      <section className={styles.homeSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>
            Gemeinsam handeln,
            <br />
            gemeinsam wohnen
            <br />
            MieterUnity!
          </span>
        </div>
      </section>

      <section className={styles.homeSection}>
        <article className={styles.homeArticle}>
          <div className={styles.homeArticleLeftContent}>
            <div className={styles.sectionContentText}>
              <h2>Deine Stimme zählt! </h2>
              Du bist genervt von chaotischen WhatsApp-Gruppen oder
              unbeantworteten E-Mails an die Hausverwaltung? MieterUnity bringt
              deine Hausgemeinschaft zusammen – anonym, sicher und effizient.
              Tausche dich mit deinen Nachbarn aus, organisiere gemeinsame
              Aktionen und setze euch für ein besseres Wohnumfeld ein.
            </div>
            <div className={styles.sectionContentImage}>
              <img src={house_01} alt="" />
            </div>
          </div>
        </article>
      </section>

      <section className={styles.homeCardList}>
        <article className={styles.homeCard}>
          <h2>Austausch leicht gemacht</h2>

          <p>
            Ob kaputte Heizung, laute Nachbarn oder Fragen zu den Nebenkosten –
            mit unserer übersichtlichen Diskussionsplattform bleibst du immer
            informiert. Erstelle Threads zu wichtigen Themen und finde schnell
            Unterstützung von anderen Mietern in deinem Haus.
          </p>
        </article>

        <article className={styles.homeCard}>
          <h2>Gemeinsam stark Schluss mit Einzelkämpfen!</h2>

          <p>
            Plane mit deinen Nachbarn Unterschriftensammlungen, Beschwerden oder
            gemeinsame Initiativen. Je mehr sich beteiligen, desto größer die
            Wirkung gegenüber der Hausverwaltung oder dem Vermieter.
          </p>
        </article>

        <article className={styles.homeCard}>
          <h2>Sicher & anonym</h2>
          <p>
            Deine Privatsphäre hat höchste Priorität. Auf MieterUnity kannst du
            dich anonym registrieren und unter einem Pseudonym mit deinen
            Nachbarn kommunizieren – ohne Telefonnummer oder persönliche Daten
            preiszugeben.
          </p>
        </article>
      </section>

      <section id="vision" className={styles.homeSection}>
        <article className={styles.homeArticle}>
          <div className={styles.sectionContentText}>
            <h2>Unsere Vision - MieterUnity</h2>
            Gemeinsam mehr erreichen In einer Hausgemeinschaft leben viele
            Menschen Tür an Tür, doch oft fehlt die Verbindung untereinander.
            Wir möchten das ändern! MieterUnity ist mehr als nur eine Plattform
            – es ist eine Vision für eine engere, stärkere Nachbarschaft. Egal,
            ob es um gemeinsame Interessen geht, um das Organisieren eines
            Mieterfestes oder darum, sich als Gemeinschaft gegenüber dem
            Vermieter Gehör zu verschaffen – unsere Plattform soll ein Ort sein,
            an dem Nachbarn sich unkompliziert vernetzen und unterstützen
            können. Wir glauben daran, dass echte Gemeinschaft im Alltag
            entsteht. Vielleicht braucht jemand spontan ein Backutensil oder ein
            Werkzeug zum Ausleihen. Vielleicht gibt es eine wichtige
            Angelegenheit, die alle betrifft, und man möchte gemeinsam handeln.
            Oder vielleicht gibt es einfach den Wunsch, mit anderen aus dem Haus
            ein Hobby zu teilen. All das sollte nicht an komplizierter
            Kommunikation oder fehlenden Kontakten scheitern. Unsere Mission ist
            es, ein digitales Zuhause für Hausgemeinschaften zu schaffen – eine
            Plattform, die Nachbarn zusammenbringt und ihnen hilft, ihr Umfeld
            aktiv mitzugestalten. Wir hoffen, dass auch andere diesen Traum
            erkennen, ihn als wichtig erachten und ihn mit uns gemeinsam leben.
            Denn eine starke Nachbarschaft beginnt mit einem einfachen „Hallo“.
          </div>
        </article>
      </section>

      <section id="about" className={styles.homeSection}>
        <article className={styles.homeArticle}>
          <div className={styles.sectionContentText}>
            <h2>Über uns – MieterUnity</h2>
            Wir sind ein zweiköpfiges Team mit einer gemeinsamen Vision: Mieter
            besser zu vernetzen und ihre Kommunikation einfacher zu gestalten.
            Während unseres Bootcamps bei der WBS Coding School haben wir uns
            intensiv mit moderner Webentwicklung beschäftigt – und MieterUnity
            ist das Ergebnis unseres Abschlussprojekts. Unser Ziel ist es, eine
            digitale Plattform zu schaffen, die Hausgemeinschaften stärkt und
            den Austausch zwischen Nachbarn erleichtert. Die Idee zu MieterUnity
            entstand aus einer einfachen Frage: Warum gibt es keine smarte
            Lösung, um sich effizient mit Nachbarn über wichtige Themen
            auszutauschen, ohne in chaotischen WhatsApp-Gruppen oder endlosen
            E-Mail-Ketten zu versinken? Mit dieser Plattform wollen wir genau
            das ändern – durch eine intuitive, sichere und anonyme Möglichkeit,
            gemeinsam Probleme zu lösen und Aktionen zu organisieren. Während
            unseres Bootcamps haben wir uns nicht nur tief in moderne
            Technologien wie React, Node.js und MongoDB eingearbeitet, sondern
            auch gelernt, Software zu entwickeln, die echten Mehrwert schafft.
            MieterUnity ist unser erstes großes Projekt – und hoffentlich nur
            der Anfang! Wir freuen uns, unsere Vision mit euch zu teilen und
            sind gespannt auf das Feedback der Community. Lass uns gemeinsam die
            Nachbarschaft digital revolutionieren! Euer MieterUnity-Team
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
