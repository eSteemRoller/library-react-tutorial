
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';


export default function Book({ book }) {
  return (
    <div className="book">
        <Link to='/books/1'>
            <figure className="book__img--wrapper">
                <img src={book?.url} alt={book?.title} className='book__img' />
            </figure>
        </Link>
        <div className="book__title">
            <Link to='/books/1' className='book__title--link'>
                {book?.title}
            </Link>
        </div>
        <div className="book__ratings">
            {
                new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon={faStar} key={index}/>)
            }
            {
                !Number.isInteger(book.rating) && <FontAwesomeIcon icon={faStarHalfAlt} />
            }
        </div>
        <div className="book__price">
            {book?.salePrice ? (
                    <>
                        <span className="book__price--normal">${book?.originalPrice}</span>
                        ${book?.salePrice.toFixed(2)}
                    </>
                ) : 
                (
                    <>${book?.originalPrice.toFixed(2)}</>
                )
            }
        </div>
    </div>
  );
}
