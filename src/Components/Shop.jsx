import React, { useState } from 'react'
import './Shop.css'
import products from './Images/category'
const Shop = () => {
  const[data,setData]=useState(products);
 const  filterResult=(catItem)=>{
  const result=products.filter((curData)=>{
    return curData.category===catItem;
  });
  setData(result);
 }
  return (
    <>
    <h1 className='text-center text-info'>Let's shop </h1>
    <div className='container-fluid mx-2'>
      <div className='row mt-5 mx-2'>
      <div className='col-md-3'>
<button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('sofa')}>Sofa</button>
<button className='btn btn-warning w-100 mb-4'onClick={()=>filterResult('chair')}>Chair</button>
<button className='btn btn-warning w-100 mb-4'onClick={()=>filterResult('watch')}>Watch</button>
<button className='btn btn-warning w-100 mb-4'onClick={()=>filterResult('wireless')}>Wireless</button>
<button className='btn btn-warning w-100 mb-4'onClick={()=>filterResult('mobile')}>Phone</button>
<button className='btn btn-warning w-100 mb-4'onClick={()=>setData(products)}>All</button>
      </div>
      <div className='col-md-9'>
<div className='row'>
  {data.map((values)=>{
    const{id,productName,price,imgUrl}=values;
    return(
      <>
      <div className='col-md-4 mb-4' key={id}>
    <div className="card">
    <img src={imgUrl} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{productName}</h5>
      <p>price:{price}</p>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-dark">Buy now</button>
    </div>
  </div>
    </div>
      </>
    )

  })}
  
 
  

</div>
    </div>
    </div></div>
    </>
  )
}

export default Shop
