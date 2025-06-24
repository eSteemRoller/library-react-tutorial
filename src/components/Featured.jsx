
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Featured() {
  return (
    <section id='featured'>
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="featured-books">
                    <div className="featured-book">
                        <a href='/'>
                            <figure className="book__img--wrapper">
                                <img src="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg" alt="" className='book__img' />
                            </figure>
                        </a>
                        <div className="boot__title">
                            <a href='/' className='book__title--link'>
                                Atomic Habits
                            </a>
                        </div>
                        <div className="book__ratings">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="book__price">
                            <span className="book__price--normal">$39.95</span>
                            $10.00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
