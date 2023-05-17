import React from "react";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useGlobalContext } from "../Context";

const Cart = () => {
  const {
    cart,
    closeCart,
    clearItems,
    cartItems,
    removeCartItem,
    addItem,
    dec,
    getTotal,
  } = useGlobalContext();
  if (cartItems.length === 0) {
    return (
      <div className={cart ? " show-cart empty-cart cart-container" : "cart-container"}>
        <h2 className="cart-title">Shopping Cart</h2>
        <button className="btn close" onClick={closeCart}>
          <FaTimes />
        </button>
        <div className="empty-cart">
          <GiShoppingCart />
          <p className="empty-info">Your Cart is Currently empty</p>
        </div>
      </div>
    );
  }
  return (
    <div className={cart ? " show-cart cart-container" : "cart-container"}>
      <button className="btn close" onClick={closeCart}>
        <FaTimes />
      </button>
      <div className="cart-items-container">       
               <h2 className="cart-title">Shopping Cart</h2>
        {cartItems.map((item) => {
          const { id, img, name, amount, price } = item;
          return (
            <article key={id} className="cart-item">
              <div className="cart-img">
                <img src={img} alt={name} />
              </div>
              <div className="cart-right">
                <div className="cart-item-info">
                  <p className="cart-name">{name}</p>
                  <p className="cart-price">${price}</p>
                </div>
                <div className="buttons">
                  <div className="change-amount">
                    <button
                      className="btn change-amount-icons"
                      onClick={() => dec(item)}
                    >
                      <FaMinus />
                    </button>
                    <p className="cart-amount">{amount}</p>
                    <button
                      className="btn change-amount-icons"
                      onClick={() => addItem(item)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button className="btn remove" onClick={() => removeCartItem(id)}>
                    <FaTrash/>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="cart-bottom">
      <p className="total"><span>Total</span><span>{getTotal()}</span></p>
      <button className="btn clear" onClick={clearItems}>
        Clear Cart
      </button>
      <button className="btn checkout" onClick={() => alert(`Congrats, Checkout made for $${getTotal()}`)}>
        Checkout
      </button>
      </div>
    </div>
  );
};

export default Cart;
