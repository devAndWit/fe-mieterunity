import house_01 from "../assets/house_01_pixabay.jpg";

export const Home = () => {
  return (
    <div className="site-content">
      <main>
        <h1>Willkommen bei MieterUnity</h1>
        <section>
          <h2>Deine Stimme zählt! </h2>
          <div className="section-content">
            <p className="section-content-text">
              Du bist genervt von chaotischen WhatsApp-Gruppen oder
              unbeantworteten E-Mails an die Hausverwaltung? MieterUnity bringt
              deine Hausgemeinschaft zusammen – anonym, sicher und effizient.
              Tausche dich mit deinen Nachbarn aus, organisiere gemeinsame
              Aktionen und setze euch für ein besseres Wohnumfeld ein.
            </p>
            <div className="section-content-image">
              <img src={house_01} alt="" />
            </div>
          </div>
        </section>

        <section>
          <h2>Austausch leicht gemacht</h2>
          <div className="section-content">
            <div className="section-content-image">
              <img src={house_01} alt="" />
            </div>
            <p className="section-content-text">
              Ob kaputte Heizung, laute Nachbarn oder Fragen zu den Nebenkosten
              – mit unserer übersichtlichen Diskussionsplattform bleibst du
              immer informiert. Erstelle Threads zu wichtigen Themen und finde
              schnell Unterstützung von anderen Mietern in deinem Haus.
            </p>
          </div>
        </section>

        <section>
          <h2>Gemeinsam stark Schluss mit Einzelkämpfen!</h2>
          <div className="section-content">
            <p className="section-content-text">
              Plane mit deinen Nachbarn Unterschriftensammlungen, Beschwerden
              oder gemeinsame Initiativen. Je mehr sich beteiligen, desto größer
              die Wirkung gegenüber der Hausverwaltung oder dem Vermieter.
            </p>
            <div className="section-content-image">
              <img src={house_01} alt="" />
            </div>
          </div>
        </section>

        <section>
          <h2>Sicher & anonym</h2>
          <div className="section-content">
            <div className="section-content-image">
              <img src={house_01} alt="" />
            </div>
            <p className="section-content-text">
              Deine Privatsphäre hat höchste Priorität. Auf MieterUnity kannst
              du dich anonym registrieren und unter einem Pseudonym mit deinen
              Nachbarn kommunizieren – ohne Telefonnummer oder persönliche Daten
              preiszugeben.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
