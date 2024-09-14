import Login from './commponents/login'
import Home from './section/home'
import React from 'react'
import ProductList from './commponents/productList'
import { BrowserRouter as Router , Route,Routes, Link } from 'react-router-dom'
 export default function App() {

  return (

  <Router>
  
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="Detais" element={<productDetais/>}/>
    </Routes>
  </Router>
  
  )
}



