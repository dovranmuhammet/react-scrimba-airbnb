import React from 'react'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
