import React from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Home from 'components/home'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
