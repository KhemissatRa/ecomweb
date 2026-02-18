import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../commponents/context';
import { useParams } from 'react-router-dom';
import Footer from './footer';
import Nav from '../commponents/navbar';
import Hero from './hero';
import { Link } from 'react-router-dom';
export default function ProductDetails() {

  const { products, addToCart,Increment,Dicrement,count } = useContext(MyContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
useEffect(() => {
    const productDetails = products.find((item )=> item._id === id);
    setDetails(productDetails);
    setLoading(false);
}, [id, products]);
const filtered = details 
  ? products.filter(
      (product) => product.category === details.category && product._id !== details._id
    ) 
  : [];  
  {console.log(details)}
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
          {details.Image && (
            <img
              src={details.Image}
              alt={details.title}
              className="  h-auto rounded-xl mb-4"
            />
          )}
         </div>
          
          <p className="mb-2">{details.description}</p>
          <p className="text-lg font-semibold text-teal-600 mb-2"><span className= 'text-gray-400 line-through text-md text-center '>${Number(details.price + 100)} </span> <br/> ${details.price}</p>
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
      <div className="mt-10">
  <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Related Products</h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 flex gap-6 items-center justify-center  bg-gradient-to-br from-white to-slate-100      ">
    {filtered.map((item) => (
      <div
        key={item.id}
       className='flex border-t-gray-900 border-rounded  p-4 border justify-center mx-auto items-center flex-col w-full'
      >
        <img
          className="w-48 h-48 object-cover rounded-lg "
          src={item.Image}
          alt={item.title}
        />

        <div className="text-center mt-3">
          <h2 className="text-lg font-semibold text-blue-600 transition-colors duration-200">
            {item.title}
          </h2>
          <span className="text-lg font-bold text-teal-600 mt-2 block">${item.price}</span>
        </div>

        <Link
          to={`/Details/${item.id}`}
          className="mt-4 bg-gray-800 text-white text-sm font-medium py-2 px-5 rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
        >
          Buy Now!
        </Link>
      </div>
    ))}
  </div>
</div>

      <Footer/>  
    </div>
  );
}
