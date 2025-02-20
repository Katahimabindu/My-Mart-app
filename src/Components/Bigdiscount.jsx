import React from 'react'
import './Bigdiscount.css'
import  discoutProducts  from './Images/products.js'
import Item from './Item'
const Bigdiscount = () => {
  return (
    <div className='bigdiscount'>
      <h1>Bigdiscount</h1>
      
      <div className='popular-item'>
        {discoutProducts.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.productName} image={item.imgUrl} price={item.price} discount={item.discount} />
        })}
      </div>
      
    </div>
  )
}

export default Bigdiscount
