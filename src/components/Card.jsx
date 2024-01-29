import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Details from '../pages/Details'
import { Rating } from '@mui/material';

 const Card = ({title,description, image,rating,price,productkey,productId}) => {
  // const handleDetails=()=>{

  // }
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/details/${productId}`); // Pass the productId to the Details route
  };
  return (
    <>
    <div className="max-w-2xl mx-auto mt-20" key={productkey}>


<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 mb-5 w-80 h-[116]">
  <a href="#">
    <img className="rounded-t-lg p-8 h-56 w-80" src={image} alt="product image"/>
      </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{title}</h3>
      </a>
      <div className="flex items-center mt-2.5 mb-5">
      <Rating name="read-only" value={rating} readOnly />
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
      </div>
      {/* <div className="flex items-center justify-between"> */}
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
        {/* <p className='text-xl text-white'>{description}</p> */}
        <Link to={{ pathname: `/details/${productId}`}}>
        <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-[30%] mt-10 mb-5" onClick={handleDetailsClick}>View Details</button>
      </Link>
      
      {/* </div> */}
    </div>
</div>
</div>
    </>
  )
}

export default Card