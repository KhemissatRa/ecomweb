import React from 'react'
import {useContext}  from 'react'
import { MyContext}  from './context'
export default function NewSales (){
      const{products}=useContext(MyContext)

 const New =  products.slice(0, 3)   
 return (
<div className='max-w-full flex flex-wrap h-full bg-gradient-to-br from-slate-950 via-slate-900 bg-gradient-to-br from-white to-slate-100 to-slate-800 justify-center gap-6 p-10'>
  <h1 className='w-full text-center text-white text-4xl font-black tracking-widest uppercase mb-4 drop-shadow-lg'>
    New Product
  </h1>
  {New.map((item, index) => (
    <div
      key={index}
      className='relative my-4 max-w-[300px] w-[280px] bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600/40 flex justify-center flex-col rounded-3xl items-center p-4 shadow-2xl shadow-black/60 hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300 group overflow-hidden'
    >
      {/* Glow ring on hover */}
      <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-500/10 to-transparent pointer-events-none' />

      <img
        className='w-48 mx-auto h-48 rounded-2xl object-cover transition-transform duration-300 transform group-hover:scale-110 shadow-lg shadow-black/40 ring-2 ring-slate-600/50 group-hover:ring-yellow-500/50'
        src={item.Image}
        alt={item.title}
      />

      <div className='p-3 flex flex-col w-full mt-2'>
        <h2 className='text-sm text-center font-bold text-slate-300 mb-3 group-hover:text-white transition-colors duration-200 tracking-wide'>
          {item.title}
        </h2>
        <div className='flex flex-col items-center justify-between'>
          <span className='text-2xl font-black text-yellow-400 drop-shadow-md tracking-tight'>
            {item.price}$
          </span>
          <button className='mt-3 w-full py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-xs tracking-widest uppercase transition-colors duration-200 shadow-lg shadow-yellow-500/20'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}</div>)}
