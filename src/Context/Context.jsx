import React, { createContext, useState } from "react";
import all_product from "../components/Assests/all_product"; // Correct path

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0; // Initialize with quantity 0
    
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      console.log(updatedCart); // Log updated cart items
      return updatedCart;
    });
  };


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) - 1,
    }));
  };

  const contextValue = { all_product, addToCart, removeFromCart, cartItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
