import  { useContext } from 'react';
import { MyContext } from './context';
import { Link } from 'react-router-dom';

export default function NewSales() {
  const { products } = useContext(MyContext);
  const newProducts = products.slice(0, 3);

  return (
    <section className='md:max-w-full w-[40] bg-slate-100 flex-wrap via-slate-900 to-slate-800 py-16 px-6'>
      {/* Section header */}
      <div className='max-sm mx-auto mb-12 text-center'>
        <span className='text-xs font-bold tracking-[0.25em] uppercase text-yellow-600 mb-3 block'>
          Just Arrived
        </span>
        <h1 className='text-4xl md:text-5xl font-black tracking-tight text-slate-900'>
          New Arrivals
        </h1>
        <div className='mt-4 mx-auto w-16 h-0.5 bg-yellow-400 rounded-full' />
      </div>

      {/* Cards */}
      <div className='max-w-sm md:max-w-2xl mx-auto flex  flex-row justify-center gap-2'>
        {newProducts.map((item, index) => (
          <div
            key={index}
            className='group relative w-80 bg-slate-600 border border-slate-200 rounded-md overflow-hidden shadow-xl  transition-all duration-300'
          >
            {/* Hover glow */}
            <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10' />

            {/* Image */}
            <div className='relative overflow-hidden bg-slate-800 size-32 md:size-56'>
              <img
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                src={item.Image}
                alt={item.title}
              />
              <div className='absolute top-3 left-3 bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full'>
                New
              </div>
            </div>

            {/* Content */}
            <div className='p-5 flex flex-col gap-4'>
              <h2 className='text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200 leading-snug text-center'>
                {item.title}
              </h2>
              <div className='flex flex-col items-center justify-between'>
                <span className='text-2xl font-black text-yellow-400 tracking-tight'>
                  {item.price}$
                </span>
                <Link
                  to={`/Details/${item._id}`}
                  className='bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-lg transition-colors duration-200'
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}