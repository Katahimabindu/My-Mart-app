import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products'
import Cart from '../Cart'
import Shop from '../Shop'
const Routing = () => {
  return (
<Routes>
<Route path='/Products' element={<Products/>}/>
<Route path='/Shop' element={<Shop/>}/>
<Route path='/Cart' element={<Cart/>}/>
</Routes>
  )
}

export default Routing
