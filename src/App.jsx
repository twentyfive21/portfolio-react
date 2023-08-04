import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
