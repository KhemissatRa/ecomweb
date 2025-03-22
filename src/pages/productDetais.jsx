import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../commponents/context';
import { useParams } from 'react-router-dom';
import Footer from './footer';
import Nav from '../commponents/navbar';
import Hero from './hero';

export default function ProductDetails() {

  const { products, addToCart,Increment,Dicrement,count } = useContext(MyContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const productDetails = products.find(item => item.id === Number(id));
    setDetails(productDetails);
    setLoading(false);
  }, [id, products]);

  if (loading) {
    return <div className="text-center text-lg text-pink-600">Loading...</div>;
  }

  if (!details) {
    return <div className="text-center text-lg text-red-600">Product not found.</div>;
  }

  return (
    <div>
      <Nav/>
      <Hero/>

      <div className="min-h-screen flex p-4 flex-col w-screen items-center justify-center bg-[#F5F5F5]">
        <div className="w-full flex flex-col justify-center items-center md:w-1/2  p-6 bg-white rounded-lg shadow-md">
          <div>
          <h1 className="text-3xl font-bold text-center  text-[#1F2937] mb-4">{details.title}</h1>
          {details.image && (
            <img
              src={details.image}
              alt={details.title}
              className="  h-auto rounded-xl mb-4"
            />
          )}
         </div>
          
          <p className="mb-2">{details.description}</p>
          <p className="text-lg font-semibold text-teal-600 mb-2">Price: ${details.price}</p>
          <p className="text-lg font-semibold text-yellow-400 mb-2">{details.rating.rate} <i class="fa-solid text-yellow-400 fa-star"></i></p>
          {console.log(details)}

          <p className="text-gray-600 italic">Category: {details.category}</p>
      <div className='flex flex-row justify-center items-center'>
          <button 
            className='bg-blue-600 w-32 my-2 flex mx-auto text-white py-4 px-4 rounded-lg shadow-md hover:shadow-lg focus:bg-yellow-500 transition-all duration-300' 
            onClick={() => addToCart(details)}
          >
            Add to Cart
          </button>
          <div className=' flex justfiy-center items-center font-bold p-2 border rounded-md shadow-lg bg-gray-100  text-center'>
      
      <button
        onClick={() => Increment(details)}
      >
          <i className="text-center fa-solid text-black fa-plus"></i>
      </button>
      <div className="text-sm font-bold p-2 ">
        {count}
      </div>
      <button
        onClick={() => Dicrement (details)}
        className="  "
      >
        <i className=" fa-solid fa-minus"></i>
        </button>
      </div>
      </div>
    </div>
      </div>
      <Footer/>  
    </div>
  );
}
