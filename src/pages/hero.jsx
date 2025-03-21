import React from 'react';

export default function Hero() {
  return (
    <div  className='w-full  bg-white text-white flex items-center justify-center py-12 px-4 border rounded-lg'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl'>
        <img 
          className='w-1/2 rounded-full  object-cover'
          src='../assets/6737249.jpg' 
          alt='Promotional'
        />
        <div className='md:ml-8  text-center md:text-left'>
          <h1 className='p-2 text-4xl bg-gray-800 rounded-xl font-bold mb-4'>
            5% Off With All Our Products!
          </h1>
          <p className='text-base text-gray-600 md:text-lg'>
            Shop now and enjoy exclusive savings on our entire range of products.
            Lorem ipsum dolor sit amet, consectetur adipisicin
            <span className='text-yellow-400 text-md'> End Promo 12:5:2025 / 2:25 AM...</span>
          </p>
        </div>
      </div>
    </div>
  );
}