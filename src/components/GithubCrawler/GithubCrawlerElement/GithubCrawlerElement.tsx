import { imageMap } from '../../../__resources__/imageMap';
import { GithubCrawlerInfo } from '../../../__resources__/types';
import AttributeValuePair from '../AttribValuePair/AttribValuePair';

/** Wie viele Sprachen hoechstens genannt werden. Der Rest ist meist Rauschen -
 *  eine einzelne Shell-Zeile sagt nichts ueber das Projekt aus. */
const MAX_LANGUAGES = 3;

/**
 * Sprachen nach Anteil, absteigend. Faellt auf `language` zurueck, solange das
 * Backend die Verteilung fuer dieses Repository noch nicht geholt hat.
 */
const describeLanguages = (element: GithubCrawlerInfo): string => {
  const distribution = element.languages;
  if (!distribution) return element.language;

  const entries = Object.entries(distribution).sort(([, a], [, b]) => b - a);
  if (entries.length === 0) return element.language;

  const shown = entries.slice(0, MAX_LANGUAGES).map(([name]) => name);
  // Der Hinweis, dass mehr da ist, ohne die Zeile zu sprengen.
  const rest = entries.length - shown.length;
  return rest > 0 ? `${shown.join(' · ')} +${rest}` : shown.join(' · ');
};

const GithubCrawlerElement = ({ element }: { element: GithubCrawlerInfo }) => (
  /*sort element by push date*/
  <a href={element['html_url']}>
    <li className='gc__li' key={element.html_url}>
      <div className='gc__element'>
        <div>
          <img
            className='gc__img'
            src={imageMap.githubLogo}
            alt='Github Symbol'
            width={'30px'}
          ></img>
        </div>

        <div className='gc__div'>
          <div>{AttributeValuePair('Name: ', element['full_name'])}</div>
          <div>{AttributeValuePair('Description: ', element['description'])}</div>
          <div>{AttributeValuePair('Last Push: ', element['pushed_at'])}</div>
          <div>{AttributeValuePair('Languages: ', describeLanguages(element))}</div>
        </div>
      </div>
    </li>
  </a>
);

export default GithubCrawlerElement;
