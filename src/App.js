
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from './pages/Books';
import { books } from './data';
import book from './components/ui/Book';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import { useState } from 'react';


export default function App() {

  const [cart, setCart] = useState([]);

  function addToCart() {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem) {
      setCart(cart.map(item => {
        if (item.id === dupeItem.id) {
          return {
            ...item,
            quantity: item.quantity +1,
          }
        }
        else {
          return item;
        }
      })
    }
    else {
      setCart([...cart, {...book, quantity: 1}])
    }
  }

  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart books={books} />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

