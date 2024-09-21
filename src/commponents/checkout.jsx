import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './context';
export default function ThankYou() {
  const  {setCart,cart}=useContext(MyContext)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Your products are on their way! Thank you for your order!
      </h1>
      <Link 
        to="/" 
        className="mt-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Continue Shopping
      </Link>
      {()=>setCart([])}
    </div>
  );
}