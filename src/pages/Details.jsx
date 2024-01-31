import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Link, useParams } from 'react-router-dom';
import Slideshow from '../components/Slider';
import Loader from '../components/Loader/Loader';
import { Rating } from '@mui/material';

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
        <>
        <Link to={{pathname:'/'}}>
      <button className=' text-5xl font-bold m-6 w-28'>⬅</button>
        </Link>
        <div className=' mt-[10%] mx-5 md:flex border border-orange-500 md:p-16 mb-[10%]'>
          
       <Slideshow image1={products.images[0]} image2={products.images[1]} image3={products.images[2]} image4={products.images[3]} />
       <div className='md:ms-32 p-4'>
            <h1 className=' font-bold my-5'>{products.title}</h1>
            <p>{products.description}</p>
            <h1 className='font-bold my-5'>Brand: <span className=' font-light'>{products.brand}</span></h1>
      <Rating name="read-only" value={products.rating} readOnly />
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{products.rating}</span>
            <h1 className=' font-bold my-5'>${products.price}</h1>

       </div>
        </div>
        </>
:<Loader/>}
      </div>
    );
  }
export default Details