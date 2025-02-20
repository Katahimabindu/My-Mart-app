import React from 'react'
import './Banner.css'
import  phoneproducts  from './Images/apple.js'
import Newarrival from './Newarrival.jsx'
const Banner = () => {
  return (
    <div className='arrivalitems'>
      <h1>Newarrivals</h1>
      
      <div className='popular-item'>
        {phoneproducts.map((newarrival,i)=>{
          return <Newarrival key={i} id={newarrival.id} name={newarrival.productName} image={newarrival.imgUrl} price={newarrival.price} />
        })}
      </div>
      
    </div>
  )
}

export default Banner
