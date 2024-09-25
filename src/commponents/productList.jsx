import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from './context';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const{products,find}=useContext(MyContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a fetch delay
                setLoading(false);
            } catch (err) {
                setError('Failed to load products. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    
    const categories = ['All', ...new Set(products.map(product => product.category))];
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    console.log(products)
    if (loading) return <div className="text-center py-10 text-gray-700">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
    return (
        <div className="container mx-auto px-4 py-10">
            <div className='flex justify-center mb-8'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        aria-pressed={selectedCategory === category}
                        className={`py-2 px-6 mx-2 text-white rounded-lg transition-colors duration-300 focus:outline-none ${
                            selectedCategory === category ? 'bg-teal-600' : 'bg-gray-600 hover:bg-teal-500'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {filteredProducts.map(item => (
                    <div
                        key={item.id}
                        className='relative bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl'
                    >
                        <img
                            className='w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110'
                            src={item.image}
                            alt={item.title}
                        />
                        <div className='p-6'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-200'>{item.title}</h2>
                            <p className='text-gray-600 mb-4'>{item.description}</p>
                            <div className='flex items-center justify-between'>
                                <span className='text-xl font-bold text-teal-600'>{item.price}$</span>
                                <span className='text-yellow-500'>{item.rating.rate}/5</span>
                            </div>
                        </div>
                        <Link to={`/Details/${item.id}`} className='absolute bottom-4 right-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
                            Buy Now!
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}