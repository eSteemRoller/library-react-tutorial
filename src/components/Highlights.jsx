
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';
import Highlight from './ui/Highlights';

export default function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">
                <h2 className='section__title'>
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                        icon={<FontAwesomeIcon icon={faBolt} />}
                        title='Easy and Quick'
                        para='Instant online access.'
                    />
                    <Highlight 
                        icon={<FontAwesomeIcon icon={faBookOpen} />}
                        title='10,000+ Books'
                        para='All your favorite categories.'
                    />
                    <Highlight 
                        icon={<FontAwesomeIcon icon={faTags} />}
                        title='Affordable'
                        para='Popular books for only $10.'
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
