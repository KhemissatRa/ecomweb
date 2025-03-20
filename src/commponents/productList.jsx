import  { useContext, useState, useEffect } from 'react';
import { MyContext } from './context';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const{products}=useContext(MyContext)
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
                        className={`py-2 hidden md:flex px-6 mx-2 text-white rounded-lg transition-colors duration-300 focus:outline-none ${
                            selectedCategory === category ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-600'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                        {console.log(category)}
                    </button>
                ))}

                <select className='md:hidden p-2 rounded bg-gray-800 text-white shadow-md focus:outline-none cursor-pointer' onChange={(e)=> setSelectedCategory(e.target.value)} >
                    <option value="All">All</option>
                    <option value="men's clothing">mens clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">electronics</option>




                </select>
            </div>

            <section className='flex justify-center mx-auto items-center grid   md:grid-cols-4 max-w-full   '>
                {filteredProducts.map(item => (

                    <div
                        key={item.id}
                        className='relative my-4 max-w-[300px] bg-white border flex justify-center flex-col  rounded-3xl m-2 items-center p-2'
                    >
                        <img
                            className='w-48 mx-auto h-48  object-cover transition-transform duration-300 transform hover:scale-110'
                            src={item.image}
                            alt={item.title}
                        />
                        <div className='p-2 flex flex-col '>
                            <h2 className='text-sm text-center font-semibold text-gray-800 mb-2 hover:text-blue-800 transition-colors duration-200'>{item.title}</h2>
                        
                            <div className='flex flex-col  items-center justify-between'>
                                <span className='text-lg  text-blue-800 font-bold text-teal-600'>{item.price}$</span>
                            </div>
                        </div>
                        <Link to={`Details/${item.id}`} className='  bg-gray-800 text-center w-28 text-white p p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
                            Buy Now!
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}