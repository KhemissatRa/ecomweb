import React from 'react'
import ProductList from '../commponents/productList'
import Navbar from '../commponents/navbar'
import Hero from './hero'
import Footer from './footer'; 
import NewSales from '../commponents/NewSales'; 
import About from './About'
export default function Home() {



  return (
    <div style={{width:'100%', overflow:"hidden"}}>
    
    <Navbar/>
  
    <Hero/>

        <ProductList/>
        <NewSales/>

        

    <Footer/>
    </div>
    )
}
