import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import price from './Bigdiscount'

const initialState={
  // cartItems:localStorage.getItem("cartItems")
  // ?JSON.parse(localStorage.getItem("cartItems")):[],
cartItems:[],
cartTotalQuantity:0,
cartTotalAmount:0
};
const CartSlice = createSlice( {
  name:"cart",
  initialState,
reducers:{
addToCart(state,action){
  const newItem=`${action.payload.props.id}`
const itemIndex=state.cartItems.findIndex(({props})=>(`${props.id}`)===newItem);
// state.cartItems.push(action.payload);

if(itemIndex >=0){
 state.cartItems[itemIndex].cartQuantity +=1;
  toast.info("increased product quantity",{position:'bottom-left',});
}
else{
  const tempProduct={...action.payload,cartQuantity:1};
state.cartItems.push(tempProduct);
toast.success(`${action.payload.props.name}added to cart`,{position:'bottom-left',});
  }
// localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
},
  getTotals(state,action){
    
   let {total,quantity} =state.cartItems.reduce(
    (cartTotal,cartItem)=>{
      
      const{props,cartQuantity}=cartItem;
      const itemTotal= props.price*cartQuantity
      cartTotal.total += itemTotal
      cartTotal.quantity +=cartQuantity
      return cartTotal;
    },{
      total:0,
      quantity:0
    });
    state.cartTotalAmount=total;
    state.cartTotalQuantity=quantity;
  }
},
}
);
export const {addToCart,getTotals}=CartSlice.actions;
export default CartSlice.reducer;
