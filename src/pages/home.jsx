import React from 'react'
import ProductList from '../commponents/productList'
import Navbar from '../commponents/navbar'
import Hero from './hero'
import FeaturedProducts from './Hero2';
import Footer from './footer'; 
import image2 from '../assets/imagee.jpg'; 
import image1 from '../assets/image.jpg'; 
export default function Home() {



const featuredProducts = [
    {
        image: image1,
        title: 'Coming Soon',
        description: 'This is a great product.',
        price: '29.99'
    },
 
    
];
  return (
    <div style={{width:'100%', overflow:"hidden"}}>
    
    <Navbar/>
    <Hero/>
    <ProductList/>
    <FeaturedProducts products={featuredProducts} />
    <Footer/>
    </div>
    )
}
