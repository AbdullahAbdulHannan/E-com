     
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Details from './pages/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch(err => console.log(err.message));
      console.log(products);
      alert('Open in Desktop for better response will be updated for mobile screens soon..')
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
