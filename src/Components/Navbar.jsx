import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './Images/logo.png'
import cart from './Images/cart.png'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {cartTotalQuantity}=useSelector(state=>state.cart)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            </div>
      <ul className="nav-menu">
        
        <li><Link style={{textDecoration:'none', width:'200%'}}to ='/Products'>Home</Link></li>
        <li><Link style={{textDecoration:'none'}} to = '/Shop'>Shop</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/Cart'>Cart</Link></li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
      <Link to='/Cart' > <img src={cart} alt=""/></Link>
<div className="nav-cart-count">{cartTotalQuantity}</div>
      </div>


    </div>
  )
}

export default Navbar
