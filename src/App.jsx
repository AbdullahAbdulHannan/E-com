     
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Details from './pages/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch(err => console.log(err.message));
      console.log(products);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;