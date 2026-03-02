import { useState } from 'react'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/WishList'
import Compare from './pages/Compare'
import './App.css'


function App() {

  return (
    <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path="/compare" element={<Compare />} />
       </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
