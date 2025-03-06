import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../commponents/context';
import { useParams } from 'react-router-dom';
import Footer from './footer';
import Nav from '../commponents/navbar';
import Hero from './hero';

export default function ProductDetails() {
  
  const { products, addToCart,cart } = useContext(MyContext);
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

      <div className="min-h-screen flex w-screen items-center justify-center bg-pink-50">
        <div className="w-1/2 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-pink-700 mb-4">{details.title}</h1>
          {details.image && (
            <img
              src={details.image}
              alt={details.title}
              className="  h-auto rounded-xl mb-4"
            />
          )}
          <button 
            className='bg-gradient-to-r from-teal-500 to-teal-700 w-38 my-6 mx-56 text-white py-4 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300' 
            onClick={() => addToCart(details)}
          >
            Add to Cart
          </button>
          {console.log(cart)}
          <p className="mb-2">{details.description}</p>
          <p className="text-lg font-semibold text-pink-600 mb-2">Price: ${details.price}</p>
          <p className="text-gray-600 italic">Category: {details.category}</p>
        </div>
      </div>
      <Footer/>  
    </div>
  );
}
