import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
export default function Nav(){



     return (
<>
<div className=' m-0 bg-slate-200 	w-screen text-blue-800 flex justify-center space-x-16  text-base	 h-8 items-center	' >    
<div className="flex  text-blue  fixed left-2"><h1>Kemissat</h1></div>
   
 
<Link to="/Home">Home</Link>
<Link to="/Catogery" >Catogery</Link>
<Link to="Exapmle">Example</Link>
<Link to="/Example">Example</Link>

<form  className=' fixed  right-2 m-auto flex'>
  <input className= 'border-2 border-blue-800 text-blue-800  focus:outline-none  placeholder-blue-800 text-sm rounded-full  pl-2 size-sm' type="text" placeholder='Search...' />
  <button type='submit' className='bg-blue-800 text-white rounded-xl w-16 size-sm'><FontAwesomeIcon icon={faSearchengin} /></button>

</form>
</div>
</>
  )
}
