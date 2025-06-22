
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';

export default function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">
                <h2 className='section__title'>
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon={faBolt} />
                        </div>
                        <h3 className="highlight__subtitle">Easy and Quick</h3>
                        <p className="highlight__para">
                            Instant online access.
                        </p>
                    </div>
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <h3 className="highlight__subtitle">10,000+ Books</h3>
                        <p className="highlight__para">
                            All your favorite categories.
                        </p>
                    </div>
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon={faTags} />
                        </div>
                        <h3 className="highlight__subtitle">Affordable</h3>
                        <p className="highlight__para">
                            Popular books for only $10.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
