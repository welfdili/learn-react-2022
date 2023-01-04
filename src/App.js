import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ShowProduct from './components/ShowProduct';
import { ProductProvider } from './Contexts/ProductContext';

function App() {
  return (
    <Router>
      <ProductProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
