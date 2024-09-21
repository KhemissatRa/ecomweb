import React, { useContext } from 'react';
import { MyContext } from './context';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const { cart, addToCart, removeFromCart, setCart } = useContext(MyContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h1>
      <div aria-live="polite">
        {cart.length === 0 ? (
          <h2 className="text-lg text-gray-600 text-center">Your cart is empty.</h2>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-300">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">ID: {item.id}</p>
                    <p className="text-lg text-gray-800">{item.price}$</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
                      onClick={() => addToCart(item)}
                      aria-label={`Add more of ${item.title}`}
                    >
                      Add
                    </button>

                    <button 
                      onClick={() => removeFromCart(item)} 
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>{totalPrice}$</span>
            </div>
          
          </>
        )}
        <Link to="/checkout">
        <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            aria-label="Proceed to checkout"
          >
            Proceed to Checkout
          </button >
        </Link>
      </div>
    </div>
  )}
