import styles from "../styles/components/main.module.css";

export const About = () => {
  return (
    <main className={styles.main}>
      <h1>Über uns – MieterUnity</h1>

      <section>
        <article>
          Wir sind ein zweiköpfiges Team mit einer gemeinsamen Vision: Mieter
          besser zu vernetzen und ihre Kommunikation einfacher zu gestalten.
          Während unseres Bootcamps bei der WBS Coding School haben wir uns
          intensiv mit moderner Webentwicklung beschäftigt – und MieterUnity ist
          das Ergebnis unseres Abschlussprojekts. Unser Ziel ist es, eine
          digitale Plattform zu schaffen, die Hausgemeinschaften stärkt und den
          Austausch zwischen Nachbarn erleichtert.
        </article>

        <article>
          Die Idee zu MieterUnity entstand aus einer einfachen Frage: Warum gibt
          es keine smarte Lösung, um sich effizient mit Nachbarn über wichtige
          Themen auszutauschen, ohne in chaotischen WhatsApp-Gruppen oder
          endlosen E-Mail-Ketten zu versinken? Mit dieser Plattform wollen wir
          genau das ändern – durch eine intuitive, sichere und anonyme
          Möglichkeit, gemeinsam Probleme zu lösen und Aktionen zu organisieren.
        </article>

        <article>
          Während unseres Bootcamps haben wir uns nicht nur tief in moderne
          Technologien wie React, Node.js und MongoDB eingearbeitet, sondern
          auch gelernt, Software zu entwickeln, die echten Mehrwert schafft.
          MieterUnity ist unser erstes großes Projekt – und hoffentlich nur der
          Anfang! Wir freuen uns, unsere Vision mit euch zu teilen und sind
          gespannt auf das Feedback der Community. Lass uns gemeinsam die
          Nachbarschaft digital revolutionieren!
        </article>

        <article>Euer MieterUnity-Team</article>
      </section>
    </main>
  );
};

export default About;
