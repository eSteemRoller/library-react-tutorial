
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/Undraw_Books.svg';

export default function Landing() {
  return (
    <section id='landing'>
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Australia's Most Awarded Online Library Platform</h1>
                    <h2>Find Your Dream Book With <span className="purple">Library</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="UndrawBooks" />
                </figure>
            </div>
        </header>
    </section>
  );
}
