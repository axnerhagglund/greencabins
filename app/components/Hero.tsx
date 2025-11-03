import React from 'react'
import Button from './Button'
function Hero() {
  return (
    <div className='bg-[url(/08-night.jpg)] h-screen bg-cover bg-center flex flex-col items-center justify-center '>
      
        <h1 className='text-white text-4xl md:text-6xl font-bold mb-4'>Welcome to nature</h1>
        <p className='text-white text-lg md:text-2xl mb-8 max-w-2xl text-center'>Book the perfect <span className=' font-medium border-b'>get away</span> cabin <br/> right now!</p>
        <Button title="Explore Cabins" href="100vh" buttonType="primary" />
      
    </div>
  )
}

export default Hero