
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from './pages/Books';
import { books } from './data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

