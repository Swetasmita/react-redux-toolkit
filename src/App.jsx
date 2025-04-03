// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import './index.css'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </div>
 
    </BrowserRouter>
  )
}

export default App
