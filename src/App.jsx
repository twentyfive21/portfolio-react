import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div>
      <Header />
      <Homepage />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
