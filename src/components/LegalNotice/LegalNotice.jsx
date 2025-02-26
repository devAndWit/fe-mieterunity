import styles from "./LegalNotice.module.css";

export const LegalNotice = () => {
  return (
    <main>
      <section className={styles.legalNoticeSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Impressum</span>
        </div>
      </section>

      <section className={styles.legalNoticeSection}>
        <article className={styles.legalNoticeArticle}>
          <div className={styles.sectionContentText}>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>
              [Name des Unternehmens / Webseitenbetreibers]
              <br />
              [Adresse]
              <br />
              [PLZ, Stadt]
              <br />
              [Telefonnummer]
              <br />
              [E-Mail-Adresse]
              <br />
              [Webseite-URL]
              <br />
              <br />
              Falls eine Firma: Vertreten durch: [Name der
              vertretungsberechtigten Person]
              <br />
              Handelsregister: [Registergericht & Registernummer]
              <br />
              Umsatzsteuer-Identifikationsnummer: [falls vorhanden, z. B.
              DE123456789]
              <br />
              Berufsrechtliche Regelungen: [falls zutreffend, z. B. für Anwälte,
              Ärzte]
              <br />
            </p>
            <br />
            <p>
              Falls journalistisch-redaktionelle Inhalte bereitgestellt werden:
              Verantwortlich für den Inhalt nach § 18 MStV: [Name] [Adresse]
              Falls Online-Streitbeilegung erforderlich (z. B. Online-Shop): Die
              Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default LegalNotice;
