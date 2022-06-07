import React from 'react'
import useCartContex from '../store/CartContext'
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantInCart } = useCartContex();
  return (    
    <Link to="/category/cart" className="justify-content-end">
    {cantInCart()}<BsCart2/></Link>
  )
}
    

export default CartWidget