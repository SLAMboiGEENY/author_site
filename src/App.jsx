import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const MyApp = () => {
  return (
    <div className='bg-[#435058] min-h-screen max-w-7xl w-full'>
      <Navbar />
      <Hero />
      <div className='text-center text-gray-200 text-5xl hover:text-orange-500 duration-300 transition-colors mt-5'>MyApp</div>
      <Footer />
    </div>
  )
}

export default MyApp;