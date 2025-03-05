
import HeadLine from "../Misc/HeadLine.jsx";
import Section from "../Misc/Section.jsx";
import Article from "../Misc/Article.jsx";
import ArticleHeadLine from "../Misc/ArticleHeadLine.jsx";

export const LegalNotice = () => {
  return (
    <main>
      <HeadLine>Impressum</HeadLine>
      <Section>
        <Article>
          <ArticleHeadLine>Angaben gemäß § 5 TMG</ArticleHeadLine>
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
            Falls eine Firma: Vertreten durch: [Name der vertretungsberechtigten
            Person]
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
            Verantwortlich für den Inhalt nach § 18 MStV: [Name] [Adresse] Falls
            Online-Streitbeilegung erforderlich (z. B. Online-Shop): Die
            Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </Article>
      </Section>
    </main>
  );
};

export default LegalNotice;
