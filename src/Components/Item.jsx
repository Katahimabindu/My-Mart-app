import React from 'react'
import './Item.css'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router";

import props from 'prop-types';
import { addToCart} from './CartSlice'
import item from './Bigdiscount'
// import { products } from './Images/products';
// import item from './Bigdiscount'
// import Bigdiscount from './Bigdiscount';
const Item = (props) => {
  const dispatch=useDispatch({});
  const navigate=useNavigate();
  const handleAddToCart=({props})=>{
dispatch(addToCart({props}))
navigate("/Cart");

  }
return (
    <div className='item'>
      <span>{props.discount}%off</span>
        
        <img src={props.image} alt=""/>

        <p>{props.name}</p>
          <div className='button'><button onClick={()=>handleAddToCart({props})}>+</button></div>
        <div className='price'>,
            ${props.price}
        </div>
       
      
    </div>
  )}
export default Item
