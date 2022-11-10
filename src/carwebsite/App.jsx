import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Detalies from './carcomp/detalies/Detalies'
import Header from './carcomp/header/Header'
import Footer from './carcomp/footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Pages from './Pages/Pages'
import BlogPage from './Pages/BlogPage'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalies/:id' element={<Detalies />} />
        <Route path='/about' element={<About />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
