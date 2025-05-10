import { createContext, useState } from "react";
import ProductsData from "../data/ProductsData";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId, colorOption, quantity) => {
    // Check if the item already exists in the cart
    const item = cart.find(
      (item) => item.productId === productId && item.colorOption === colorOption
    );

    // if the item exists in cart
    if (item) {
      // Updating the quantity of the existing item
      setCart(
        // .map() only updates the quantity of the item that matches the productId and colorOption
        cart.map((item) =>
          item.productId === productId && item.colorOption === colorOption
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    }else{
      // The item does not exists, adding the new item to cart
      setCart([...cart, { productId, colorOption, quantity }]);
    }
  };

  const removeFromCart = (productId, colorOption) => {
    // Filter out the item to be removed from the cart
    const updatedCart = cart.filter(
      (item) => !(item.productId === productId && item.colorOption === colorOption)
    );
    setCart(updatedCart);
  }

  const getTotalCost = () => {
    return cart.reduce((total, {productId, quantity}) => {
      return total + (ProductsData[productId - 1].price * quantity);
    }, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalCost }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
