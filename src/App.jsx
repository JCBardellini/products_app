import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
