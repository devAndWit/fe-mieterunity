import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy = () => {
  return (
    <main>



      <section className={styles.privacyPolicySection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Datenschutz</span>
        </div>
      </section>

      <section className={styles.privacyPolicySection}>
        <article className={styles.privacyPolicyArticle}>
          <div className={styles.sectionContentText}>
            <h2>Datenschutzerklärung</h2>
            <b>1. Verantwortlicher</b>
            <br />
            [Name/Firma]
            <br />
            [Adresse]
            <br />
            [PLZ, Stadt]
            <br />
            [E-Mail]
            <br />
            [Telefonnummer]
            <br />
            Falls ein Datenschutzbeauftragter benannt wurde:
            Datenschutzbeauftragter:
            <br />
            [Name des Datenschutzbeauftragten]
            <br />
            [E-Mail]
          </div>
          <br />
          <div className={styles.sectionContentText}>
            <b>
              2. Erhebung und Speicherung personenbezogener Daten sowie Art und
              Zweck ihrer Verwendung
            </b>
            <br />
            a) Beim Besuch der Website Beim Aufrufen unserer Website
            [Webseiten-URL] werden durch den Browser automatisch Informationen
            an den Server unserer Website gesendet. Diese Informationen werden
            temporär in einem sog. Logfile gespeichert. Folgende Daten werden
            dabei ohne Ihr Zutun erfasst: IP-Adresse Datum und Uhrzeit der
            Anfrage Name und URL der abgerufenen Datei Website, von der aus der
            Zugriff erfolgt (Referrer-URL) Verwendeter Browser und ggf. das
            Betriebssystem Ihres Rechners Die genannten Daten werden zu
            folgenden Zwecken verarbeitet: Gewährleistung eines reibungslosen
            Verbindungsaufbaus Auswertung der Systemsicherheit und -stabilität
            Zu administrativen Zwecken Die Rechtsgrundlage für die
            Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
          </div>
          <br />
          <div className={styles.sectionContentText}>
            <b>3. Weitergabe von Daten</b>
            <br />
            Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt nur in
            folgenden Fällen: Wenn Sie ausdrücklich eingewilligt haben (Art. 6
            Abs. 1 S. 1 lit. a DSGVO) Wenn dies zur Erfüllung eines Vertrags mit
            Ihnen erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO) Wenn eine
            gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO) Wenn
            die Weitergabe zur Wahrung berechtigter Interessen erforderlich ist
            (Art. 6 Abs. 1 lit. f DSGVO)
          </div>
          <br />
          <div className={styles.sectionContentText}>
            <b>4. Cookies & Tracking-Technologien</b>
            <br />
            Diese Website verwendet Cookies. Hierbei handelt es sich um kleine
            Dateien, die Ihr Browser automatisch speichert. Sie dienen der
            Verbesserung unserer Website. Sie können Cookies in Ihren
            Browsereinstellungen deaktivieren. Falls Tracking-Tools (Google
            Analytics, Matomo etc.) genutzt werden: Wir verwenden [Name des
            Tracking-Tools]. Anbieter ist [Anbieter], [Adresse]. Das Tool
            ermöglicht eine Analyse des Nutzerverhaltens. Mehr dazu in den
            Datenschutzhinweisen von [Anbieter].
          </div>
          <br />
          <div className={styles.sectionContentText}>
            <b>5. Ihre Rechte als betroffene Person</b>
            <br />
            Sie haben folgende Rechte:
            <br />
            Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO) Berichtigung
            unrichtiger Daten (Art. 16 DSGVO) Löschung Ihrer Daten (Art. 17
            DSGVO) Einschränkung der Verarbeitung (Art. 18 DSGVO) Widerspruch
            gegen die Verarbeitung (Art. 21 DSGVO) Datenübertragbarkeit (Art. 20
            DSGVO) Beschwerde bei einer Aufsichtsbehörde.
            
          </div>
          
          <div className={styles.sectionContentText}>
            <br />
            Kontaktieren Sie uns unter [E-Mail] für Anfragen zu Ihren Rechten.
          </div>
        </article>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
