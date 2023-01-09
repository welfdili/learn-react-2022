import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ShowProduct from './components/ShowProduct';
import { ProductProvider } from './Contexts/ProductContext';
import ArticleList from './components/articles/ArticleList';
import ArticleProvider from './Contexts/article/ArticleProvider';

function App() {
  return (
    <Router>
      <ProductProvider>
        <ArticleProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ShowProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<ArticleList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ArticleProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
