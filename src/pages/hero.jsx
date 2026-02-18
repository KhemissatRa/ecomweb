import React from 'react';

export default function Hero() {
  return (
    <div  className='max-w-full min-h-full  bg-gray-900 text-white flex items-center justify-center   px-4 '>
      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-full'>
        <img src="/NIKE.jpg" alt="" />
      </div>
        <div className='md:ml-8    w-full h-full   md:text-left'>
          <h1 className='p-2 text-4xl bg-gray-900  rounded-xl font-bold mb-4'>
            5% Off With All Our Products!
          </h1>
        
          <p className='text-white md:text-lg'>
            Shop now and enjoy exclusive savings on our entire range of products.
            Lorem ipsum dolor sit amet, consectetur adipisicin
            <span className='text-yellow-400 text-md'> End Promo 12:5:2025 / 2:25 AM...</span>
          </p>
        </div>
      </div>
)}