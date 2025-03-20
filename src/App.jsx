import Home from './pages/home'
import ProductDetails from './pages/productDetais'
import ShopingCard from './commponents/shopingCard' 
import Checkout from './commponents/checkout'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'

export default function App() {

  return (
  <Router basename='/ecommerce'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details/:id" element={<ProductDetails/>}/>
      <Route path="/card" element={<ShopingCard/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
  </Router>
  
  )
}



