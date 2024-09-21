import React from 'react';

export default function Hero() {
  return (
    <div  className='w-full  bg-gradient-to-r from-teal-400 to-teal-600 text-white flex items-center justify-center py-12 px-4 border rounded-lg'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl'>
        <img 
          className='w-full md:w-1/3 rounded-lg shadow-lg object-cover'
          src='src/assets/image-1.PNG' 
          alt='Promotional'
        />
        <div className='md:ml-8 text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
            5% Off With All Our Products!
          </h1>
          <p className='text-base md:text-lg'>
            Shop now and enjoy exclusive savings on our entire range of products.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
            provident dicta aspernatur reiciendis nemo tempore natus quo distinctio
            culpa, laudantium, autem eligendi inventore officia fuga! At odio
            reprehenderit quaerat. Sequi.
          </p>
        </div>
      </div>
    </div>
  );
}