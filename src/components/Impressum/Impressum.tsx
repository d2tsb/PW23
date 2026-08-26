import './Impressum.scss';
import routes from '../../__resources__/routes';
import { MAIL } from '../../__resources__/constants';

/**
 * Bewusst einsprachig deutsch, auch auf der englischen Fassung der Seite -
 * bei rechtlichen Hinweisen ist das die uebliche und sicherere Wahl.
 *
 * Die Route liegt ausserhalb von <Page>, es gibt hier also weder PageContext
 * noch Theme-Klasse. Die Farben kommen deshalb aus Impressum.scss und nicht
 * aus den CSS-Variablen in color.scss.
 */
const Impressum = () => (
  <div className='impressum'>
    <a className='impressum__back' href={routes.empty}>
      &larr; zurück
    </a>

    <h1 className='impressum__title'>Datenschutz &amp; Rechtliches</h1>

    <section className='impressum__section'>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Tilman-Sören Bertram</p>
      <p>
        <a href={`mailto:${MAIL}`}>{MAIL}</a>
      </p>
    </section>

    <section className='impressum__section'>
      <h2>Datenschutz</h2>
      <p>
        Diese Seite setzt <strong>keine Cookies</strong>, bindet keine externen Schriftarten oder
        Inhalte-Netzwerke ein und verwendet keine Analyse- oder Tracking-Werkzeuge.
      </p>
      <h3>Server-Protokolle</h3>
      <p>
        Beim Abruf werden vom Webserver IP-Adresse, Zeitpunkt, angefragte Ressource, Statuscode und
        User-Agent protokolliert. Das ist für den Betrieb und die Abwehr von Missbrauch erforderlich
        (Art. 6 Abs. 1 lit. f DSGVO). Eine Zusammenführung mit anderen Daten findet nicht statt.
      </p>
      <h3>Lokale Speicherung</h3>
      <p>
        Wird die Farbgebung manuell umgestellt, wird diese Wahl für einen Tag im{' '}
        <code>localStorage</code> des Browsers abgelegt. Sie enthält keinen Personenbezug, verlässt
        das Gerät nicht und lässt sich über die Browser-Einstellungen löschen.
      </p>
      <h3>Abruf von GitHub-Daten</h3>
      <p>
        Die Projektübersicht wird über den eigenen Server bereitgestellt. Ist dieser nicht
        erreichbar, ruft der Browser die Daten ersatzweise direkt bei GitHub ab; dabei wird die
        IP-Adresse an GitHub übermittelt. Anbieter ist GitHub Inc., 88 Colin P. Kelly Jr. Street,
        San Francisco, CA 94107, USA.
      </p>
      <h3>Ihre Rechte</h3>
      <p>
        Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und
        Datenübertragbarkeit können formlos unter der oben genannten Adresse geltend gemacht werden.
        Daneben besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
      </p>
    </section>

    <section className='impressum__section'>
      <h2>Bildnachweise und Marken</h2>
      <p>
        Verwendete Logos und Bildmarken sind Eigentum der jeweiligen Rechteinhaber und werden
        ausschließlich zur Kennzeichnung der genannten Organisationen und Dienste verwendet:
        Hochschule für angewandte Wissenschaften Landshut, Campudus GmbH, GitHub, LinkedIn, Credly,
        Amazon Web Services.
      </p>
      <p>Nutzungsbedingungen der eingesetzten Dienste und Bibliotheken:</p>
      <ul className='impressum__links'>
        <li>
          React — <a href='https://opensource.fb.com/legal/terms'>opensource.fb.com/legal/terms</a>
        </li>
        <li>
          LinkedIn —{' '}
          <a href='https://www.linkedin.com/legal/impressum'>linkedin.com/legal/impressum</a>
        </li>
        <li>
          Giphy —{' '}
          <a href='https://support.giphy.com/hc/en-us/articles/360020027752-GIPHY-User-Terms-of-Service'>
            GIPHY User Terms of Service
          </a>
        </li>
      </ul>
    </section>

    <section className='impressum__section'>
      <h2>Haftung für Links</h2>
      <p>
        Diese Seite verweist auf externe Angebote, auf deren Inhalte kein Einfluss besteht. Für sie
        ist ausschließlich der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren
        keine Rechtsverstöße erkennbar.
      </p>
    </section>

    <section className='impressum__section'>
      <h2>Technisches</h2>
      <p>
        TypeScript und React, gebaut mit Vite, ausgeliefert als statische Dateien hinter nginx. Die
        Projektdaten liefert ein eigener Dienst, der die GitHub-API zwischenspeichert. Der Server
        ist als NixOS-Konfiguration deklarativ beschrieben.
      </p>
      <p>
        Quellcode: <a href='https://github.com/d2tsb/PW23'>github.com/d2tsb/PW23</a>
      </p>
    </section>
  </div>
);

export default Impressum;
