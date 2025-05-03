import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    console.log(cart)
    setCart([...cart, productId]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };