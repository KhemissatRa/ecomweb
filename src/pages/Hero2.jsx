import React from 'react';

export default function FeaturedProducts({ products }) {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl  text-yellow-500 font-bold text-gray-800 mb-8 text-center">Cooming soon ...</h2>
                <div className="w-1/2 flex mx-auto justify-center">

                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl mx-4 p-10"
                        >
                            <img
                                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-200">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <span className="text-xl font-bold text-teal-600">${item.price}</span>
                            </div>
                            <button
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-teal-700 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Buy Now!
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}