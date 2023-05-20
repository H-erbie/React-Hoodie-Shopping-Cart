import React, { useContext, useEffect, useState } from "react";
import { products } from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [amount, setAmount] = useState( JSON.parse(localStorage.getItem('amount')) || 0);
  useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('amount', JSON.stringify(amount))
  },[cartItems])
  const openCart = () => {
    setCart(true);
  };
  const closeCart = () => {
    setCart(false);
  };

  const addItem = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setAmount((c) => c + 1);
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: product.amount + 1 }]);
      setAmount((a) => a + 1);
    }
  };
  const dec = (product) => {
    setAmount((c) => (c === 0 ? (c = 0) : c - 1));
    setCartItems(
      cartItems
        .map((item) =>
          item.id === product.id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount !== 0)
    );
  };

  const clearItems = () => {
    setCartItems([]);
    setAmount(0);
  };
  const removeCartItem = (id) => {
    let itemAmount = 0;
    cartItems.map((item) => {
      if (item.id === id) {
        itemAmount = item.amount;
      }
    });
    setCartItems(cartItems.filter((item) => item.id !== id));
    setAmount((c) => c - itemAmount);
  };
  let ItemAmount = 0;
  const getTotal = () => {
    let tots = 0;
    cartItems.map((item) => {
      ItemAmount = item.price * item.amount;
      tots += ItemAmount;
    });
    return parseFloat(tots.toFixed(2));
  };

  return (
    <AppContext.Provider
      value={{
        getTotal,
        cartItems,
        dec,
        products,
        addItem,
        closeCart,
        openCart,
        cart,
        clearItems,
        removeCartItem,
        amount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
