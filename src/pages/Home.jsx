import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Home = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products))
        .catch(err => console.log(err.message));
    }, []);
  
    return (
      <div className=' grid grid-cols-3 gap-2'>
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
            image={product.images[0]}
            productId={product.id}
          />
          
          ))}
      </div>
    );
  }
export default Home