import React from 'react'
import { useState} from 'react'
import {createContext} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const MyContext = createContext();
const MyProvider=({children})=>{
  const n = 'hello world'
 const [product,setProduct]=useState([])
 const [erorr,setErorr]=useState(null)
 const [loading,setLoading]=useState(null)
 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products'
        
      )        

      console.log(response.data)
     
       setProduct(response.data)
      
  
      

      setLoading(false);
    } catch (err) {
      setErorr(err.message || 'An error occurred while fetching products.');
      setLoading(false);
    }
  };

  fetchData();
}, []);
return(
    <MyContext.Provider value={{n,product,erorr,loading}}>
      {children}
    </MyContext.Provider>
)
}
export{MyContext,MyProvider}