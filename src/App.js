
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from './pages/Books';
import { books } from './data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookInfo from './pages/BookInfo';


export default function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/books/1" element={<BookInfo books={books} />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

