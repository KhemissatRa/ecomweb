import React  from 'react'
import { createContext,useState } from 'react'


const MyContext = createContext()
const MyProvider = ({Children})=>{
 
    
        

     
return(
  <MyContext.Provider value={{}}>
   {Children}
  </MyContext.Provider>
    
) ;
}

export default(MyProvider,MyContext)