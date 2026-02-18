import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [find,setFind]=useState("")
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseOne = await axios.get('https://backendoctoweb.onrender.com/product/');
{console.log(responseOne)}
        setProducts(responseOne.data);
  
        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching products.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
    const addToCart = (item) => {
      const isItemInCart = cart.find((cartItem) => cartItem.id === item.id); 
    
      if (isItemInCart) {
      setCart(
          cart.map((cartItem) => 
          cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
      );
      } else {
      setCart([...cart, { ...item, quantity: 1 }]); 
      }
    };
    const removeFromCart = (item) => {
      const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    
      if (isItemInCart.quantity === 1) {
        setCart(cartItems.filter((cartItem) => cartItem.id !== item.id)); 
      } else {
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 } 
              : cartItem
          )
        );
      }
    };
    const Increment =(e)=>{
      setCount(count+1)
      addToCart(e)
    }
    const Dicrement =(e)=>{
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

      removeFromCart(e)
    }   
 
  return (
    <MyContext.Provider value={{ find,setFind,cart, Increment,Dicrement, addToCart, removeFromCart, products, error, loading,count,setCount,setProducts,setCart }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };