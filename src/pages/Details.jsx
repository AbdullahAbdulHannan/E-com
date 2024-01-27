import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slider';
import Loader from '../components/Loader/Loader';

const Details = (id) => {
    const [products, setProducts] = useState(null);
    const {productId}=useParams()
    console.log(productId);
    useEffect(() => {
      axios.get(`https://dummyjson.com/products/${productId}`)
        .then((res) => setProducts(res.data))
        .catch(err => console.log(err.message));
        console.log(products);
    }, []);
  
    return (
      <div>
        {products?
        <div className=' mt-[16%] mx-5 flex border border-orange-500 p-16'>
          
       <Slideshow image1={products.images[0]} image2={products.images[1]} image3={products.images[2]} image4={products.images[3]} />
       <div className='ms-32 p-4'>
            <h1 className=' font-bold my-5'>{products.title}</h1>
            <p>{products.description}</p>
            <h1 className='font-bold my-5'>Brand: <span className=' font-light'>{products.brand}</span></h1>
            <h1 className=' font-bold my-5'>${products.price}</h1>

       </div>
        </div>
        
        
        :<Loader/>}
      </div>
    );
  }
export default Details