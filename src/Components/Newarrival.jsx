import React from 'react'
import './Newarrival.css'

import props from 'prop-types';
const Newarrival = (props) => {
  return (
    <div className='newarrival'>
      
        
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
        <div className='price'>
            ${props.price}
        </div>
       
      
    </div>
  )
}

export default Newarrival
