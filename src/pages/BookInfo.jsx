
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import Book from '../components/ui/Book'


export default function BookInfo({ books, addToCart }) {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                        <Link to="/books" className="book__link">
                            <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book?.url} />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                {book?.title}
                            </h2>
                            <Rating rating={book?.rating} />
                            <div className="book__selected--price">
                                <Price originalPrice={book?.originalPrice} salePrice={book?.salePrice} />
                            </div>
                            <div className="book__summary">
                                <h3 className="book__summary--title">
                                    Book Summary:
                                </h3>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, quis aspernatur ipsa quisquam veniam debitis doloribus autem saepe deleniti omnis dolorum neque quasi id consequatur sed adipisci! Commodi, iure ea!
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, quis aspernatur ipsa quisquam veniam debitis doloribus autem saepe deleniti omnis dolorum neque quasi id consequatur sed adipisci! Commodi, iure ea!
                                </p>
                            </div>
                            <button className="btn" onClick={addToCart(book)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                    <div className="books">
                        {books
                            .filter(book => book.rating === 5 && +book.id !== +id)
                            .slice(0, 4)
                            .map(book => <Book book={book} key={book.id} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
