import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from './context';

export default function Nav() {
  const { products,find, setFind, setProducts } = useContext(MyContext);

  const handleSearch = () => {
    const filtered = products.filter(item =>
      item.title.toLowerCase().includes(find.toString().toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <nav className='bg-gray-800 text-white w-full shadow-lg'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className="flex justify-between items-center space-x-8">
          <h1 className='text-3xl font-extrabold tracking-wide'>Shop<span className='text-yellow-400'>Now</span></h1>
          <Link to="/" className='hover:text-teal-300 transition duration-300 text-lg font-semibold'>Home</Link>
          <Link to="card" className='hover:text-teal-300 transition duration-300 text-lg font-semibold'>
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-teal-600" />
          </Link>
        </div>

        <form className='relative hidden md:flex' onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <input
            className='border-2 border-gray-300 text-gray-800 focus:outline-none placeholder-gray-400 rounded-full pl-4 pr-10 py-2 transition duration-300 hover:border-teal-500'
            type="text"
            placeholder='Search...'
            name='find'
            onChange={(e) => setFind(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className='absolute right-0 top-0 mt-1 mr-2 bg-teal-500 text-white rounded-full py-2 px-4 hover:bg-teal-600 transition duration-300 flex items-center'
            aria-label='Search'
          >
            <FontAwesomeIcon  icon={faSearchengin} />
          </button>
        </form>

    
        </div>
    
    </nav>
  );
}