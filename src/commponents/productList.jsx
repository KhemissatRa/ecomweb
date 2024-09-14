import react from 'react'
import {MyContext} from "./context"
import { useContext} from 'react'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';



export default function ProductList() {
    const {n,product}= useContext(MyContext)
    if (!product || product.length === 0) {
      return <p>No products available.</p>;}
  
        
  return(
<div style={{width:"85%"}} className=' flex justify-center  mx-auto grid grid-rows-4 grid-cols-4  '>
    
{product.map((item,index)=>(
  <ul   className='relative  m-auto bg-white' key={index}>
    <li style={{border:"solid 2px grey",width:"250px",height:'350px',borderRadius:'20px'}} className='	m-2   border rounded-xl'>
  
   <h1 style={{color:'#30266C'}} className='text-sm text-center' >
   {item.title}
   </h1>  
   <img className='w-40 h-40 object-cover absolute bottom-36 right-16' src={item.image} alt="photo" />
   

<div className="  absolute bottom-20 left-32 ">

   <p  style={{color:"#DCBB46"}}  >{item.price}

   </p>
   
   <p style={{color:"#DCBB46"}}> {item.rating.rate}/</p> 
   
</div>   
  
   <button style={{backgroundColor:"#30266C"}}  className='border rounded-full  text-white text-sm w-20 h-8 absolute left-24 bottom-8'>Buy Now!</button>
   </li>
   
   </ul>
)) }
</div>

       
  
  )}