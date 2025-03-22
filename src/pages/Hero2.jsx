import React from 'react';

export default function FeaturedProducts({ products }) {
    return (
        <section className="py-10  border border-t-gray-600 bg-white ">
            <div className="container mx-auto  px-4">
                <h2 className="text-3xl w-64 p-4  mx-auto text- font-bold  mb-8 text-center ">Cooming Soon</h2>
                <div className=" flex flex-col  md:flex-row mx-auto space-y-2 justify-center items-center">

                    {products.map((item, index) => (
                        <div
                            key={index}
                            className=" flex flex-col justify-center items-center border text-center bg-white  w-[300px]  border-gray-800 rounded-xl mx-4 p-10"
                        >
                            <img
                                className="w-48 h-48  mx-auto object-cover transition-transform duration-300 transform hover:scale-110"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-200">{item.title}</h3>
                                
                                <span className="text-xl font-bold text-teal-600">${item.price}</span>
                            </div>
                            <button
                                className=" bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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