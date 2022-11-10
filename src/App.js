import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import './App.css'
import Detalies from './components/Detalies/Detalies'
import Login from './Pages/Login/Login'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh()
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalies/:id' element={<Detalies />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
