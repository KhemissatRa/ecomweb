import Home from './pages/home'
import ProductDetails from './pages/productDetais'
import ShopingCard from './commponents/shopingCard' 
import Checkout from './pages/Checkout'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import About from './pages/About'
export default function App() {

  return (
  <Router >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details/:id" element={<ProductDetails/>}/>            <Route path="/card" element={<ShopingCard/>}/>
      <Route path="/About" element={<About/>}/>

      <Route path="/card" element={<ShopingCard/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
  </Router>
  
  )
}



