import React from 'react'
import { About } from './components/About'
import { Home } from './components/Home'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export const Page1 = () => {
  return (
    <div className='h-screen'>
        <Home />
        <About />
        <Pricing />
        <Footer />
    </div>
  )
}
