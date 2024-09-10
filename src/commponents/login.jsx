import React from 'react'
import MyContext from "./context"
import {useState,useContext} from "react"
import { useNavigate } from 'react-router-dom'
export default function login() {
    const [user,setUser]= useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const login =()=>{
       setUser(email,password)
    }
    const  [error,setErorr]=useState("")
    const EmailChange = (e) => {setEmail(e.target.value)}
    const PasswordChange=(e)=>{setPassword(e.target.value)}
    const HandleSubmit = (e)=>{
        e.preventDefault();
        useNavigate('/home')
        login();
        
    }
  return (
    <>
    <form action='submit' >
      <input type="text"  value={password} onChange={EmailChange}/>
      <input type="password" value={password} onChange={PasswordChange} /> 
      <input type="button" value={HandleSubmit} />

    </form>
    
    </>
  )
}
