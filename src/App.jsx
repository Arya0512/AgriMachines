import { useState } from 'react'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import WishList from './pages/WishList'
import Compare from './pages/Compare'
import './App.css'


function App() {

  return (
    <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/wishlist' element={<WishList/>}></Route>
      <Route path="/compare" element={<Compare />} />
       </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
