import React from 'react';


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10  ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">RkCompany</h3>
                        <ul>
                            <li><a href="#" className="hover:text-teal-400">About Us</a></li>
                            <li><a href="#" className="hover:text-teal-400">Careers</a></li>
                            <li><a href="#" className="hover:text-teal-400">Press</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:text-teal-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-teal-400">Returns</a></li>
                            <li><a href="#" className="hover:text-teal-400">Shipping Info</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="mb-2">16 logts Main Street</p>
                        <p className="mb-2">el-kala, State 36</p>
                        <p className="mb-2">Email: khemissat.ra@gmail.com</p>
                        <p>Phone: (+213) 699-3878-30</p>
                    </div>

                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-l-lg border-none focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-teal-600 text-white py-2 px-4 rounded-r-lg font-bold hover:bg-teal-700 transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

        

                <div className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Raoufkhemissat. All rights reserved.
                </div>
            </div>
        </footer>
    );
}