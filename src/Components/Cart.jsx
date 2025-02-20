import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import{useEffect} from "react"
import { Link } from 'react-router-dom'
import "../Cart.css"
import { getTotals } from './CartSlice'

// import cartItems from '../CartSlice'
const Cart = () => {
  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  useEffect (()=>{
dispatch(getTotals());
  },[cart,dispatch])
return(
<div className='cart-container'>
{cart.cartItems.length===0 ? (
<div className='cart-empty'>
<p>your cart is currently empty</p>
</div>
):(<div>
<div className='cart-items'>
{cart.cartItems?.map(cartItem=>(
  <div className='cart-item' key={cartItem.id}>
    <div className='cart-product'>
      <img src={cartItem.props.image} alt={cartItem.props.name}/>
      <div>
        <h3>{cartItem.props.name}</h3>
        {/* <p>{props.desc}</p> */}
        
        </div>
        </div>
        <div className='cart-product-price'>${cartItem.props.price} </div> 
        <div className='cart-product-quantity'>
          <button>-</button>
          <div className='count'>{cartItem.cartQuantity}</div>
          <button>+</button>
          </div>
          <div className='cart-product-totalprice'>

            ${cartItem.props.price * cartItem.cartQuantity}
          </div>
          <div className='cart-summary'>
  <h3>Total price</h3>
<div className='totalamount'>
  ${cart.cartTotalAmount}
</div>

</div>

          </div>
)
  
)}




  </div>


</div>)}




</div>


);
};

export default Cart;
