import React, { useEffect } from 'react'
import ResponsiveAppBar from '../components/Navbar'
import { PRODUCTS } from '../Products';

const Cart = () => {
  useEffect(() => {
    console.log(PRODUCTS);
  }, [])
  
  return (
    <>
    <ResponsiveAppBar/>
    <div>Cart</div>
    </>
  )
}

export default Cart