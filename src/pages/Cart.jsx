

export default function Cart({ cart, changeQuantity }) {

    const subTotal = () => {
        let itemTotal = 0;
        cart.forEach((book) => {
            itemTotal += +(
                (book.salePrice ?? book.originalPrice) * book.quantity
            );
        });
        return itemTotal.toFixed(2);
    };

    const taxCalc = () => {
        
    }
    
    const cartTotal = () => {
        
    }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header btn">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img 
                            src={book.url} 
                            className="cart__book--img" 
                            alt="" 
                        />
                        <div className="cart__book--info">
                            <span className="cart__book--title">
                                {book.title}
                            </span>
                            <div className="cart__book--prices">
                                <span className="book__price--normal">
                                    {book.salePrice != null 
                                        ? ` $${((book.originalPrice).toFixed(2))}`
                                        : null
                                    }
                                </span>
                                <span className="cart__book--price">
                                    {book.salePrice != null || book.originalPrice != null
                                        ? ` $${((book.salePrice ?? book.originalPrice).toFixed(2))}`
                                        : 'Price unavailable'
                                    }
                                </span>
                            </div>
                            <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                            type="number"
                            min={0}
                            max={96}
                            className="cart__input"
                            value={book.quantity}
                            onChange={(event) => 
                                changeQuantity(book, event.target.value)
                            }
                        />
                      </div>
                      <div className="cart__item--total">
                        $
                        {(
                            (book.salePrice ?? book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Sub-total:</span>
                <span>${subTotal()}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax:</span>
                <span></span>
              </div>
              <div className="total__item total__amount">
                <span>Total:</span>
                <span></span>
              </div>
              <button className="btn btn__checkout no-cursor">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
