import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return (
        <nav className='bg-gradient-to-r from-teal-600 to-teal-800 text-white w-full shadow-lg'>
            <div className='container mx-auto flex justify-between items-center p-4'>
                <div className="flex   justify-between items-center space-x-8">
                    <h1 className='text-3xl font-extrabold tracking-wide'>Khemissat</h1>
                    <Link to="/" className='hover:text-teal-300 transition duration-300 text-lg font-semibold'>Home</Link>
                    <Link to="/card" className='hover:text-teal-300 transition duration-300 text-lg font-semibold'> <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    </Link>
                </div>

                <form className='relative hidden md:flex'>
                    <input
                        className='border-2 border-gray-300 text-gray-800 focus:outline-none placeholder-gray-400 rounded-full pl-4 pr-10 py-2 transition duration-300 hover:border-teal-500'
                        type="text"
                        placeholder='Search...'
                    />
                    <button
                        type='submit'
                        className='absolute right-0 top-0 mt-1 mr-2 bg-teal-500 text-white rounded-full py-2 px-4 hover:bg-teal-600 transition duration-300 flex items-center'
                        aria-label='Search'
                    >
                        <FontAwesomeIcon icon={faSearchengin} />
                    </button>
                </form>

                <div className='md:hidden'>
                    <button className='bg-teal-600 px-4 py-2 rounded-lg focus:outline-none hover:bg-teal-500 transition duration-300'>
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    );
}