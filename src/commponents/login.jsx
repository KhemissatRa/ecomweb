import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState,useContext} from "react"
export default function Login(){ 
    const [user,setUser]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const [password,setPassword]=useState("")
    const login =()=>{
       console.log(email,password)
    }
    const EmailChange = (e) => {setEmail(e.target.value)}
    const PasswordChange=(e)=>{setPassword(e.target.value)}
    const HandleSubmit = (e)=>{
        e.preventDefault();
        login();
        navigate("/Home")
        
    }
    
  return (
    
    <div className=" flex justify-center items-center  m-auto " >
      <form className=' w-1/2 h-1/2 bg-blue-600 flex justify-center items-center flex-col space-y-5	 ' onSubmit={HandleSubmit} >
      <h1>Sign In</h1>
      <div  className=''>
      <label className='mx-1' htmlFor={email}>Email</label>
      </div>
      <div >
      <label className='mx-1' htmlFor={password}>Password</label>
      <input className="bg-orange-600 text-black" type="password" value={password} onChange={PasswordChange} /> 
      </div>
      <button type="submit">Login</button>
     </form>
    </div>
    
    
  )
}
