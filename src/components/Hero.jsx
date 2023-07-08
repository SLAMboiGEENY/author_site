import React from 'react'

const Hero = () => {
  return (
    <div className='relative max-w-7xl min-h-screen'>
      <div className="absolute inset-0 z-30 bg-transparent opacity-50"></div>
      <img 
        className="w-full h-auto object-scale-down"
        src="/crazycolor.jpg"
        alt="background"
      />
      <div className='absolute top-72  z-20 text-gray-200 text-center'>
        <h1 className="text-3xl font-semibold">blah blah blah</h1>
        <p className="text-center text-xl font-semibold text-gray-200">soundtrack to my wife</p>
      </div>
    </div>
  );
};

export default Hero;