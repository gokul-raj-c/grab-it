import React, { useState } from "react";
import "../assets/css/cart.css";
import shirtImg from "../assets/image/shirt.jpg";
import jeansImg from "../assets/image/jeans.jpg";
import tshirtImg from "../assets/image/tshirt.jpg";
import frockImg from "../assets/image/frock.jpg";

const initialCart = [
  {
    id: 1,
    name: "Formal Shirt",
    brand: "Arrow",
    color: "Blue",
    quantity: 1,
    price: 750,
    image: shirtImg,
  },
  {
    id: 2,
    name: "Denim Jeans",
    brand: "Levi's",
    color: "Blue",
    quantity: 1,
    price: 1800,
    image: jeansImg,
  },
  {
    id: 3,
    name: "Black T-Shirt",
    brand: "H&M",
    color: "Black",
    quantity: 1,
    price: 500,
    image: tshirtImg,
  },
  {
    id: 4,
    name: "Summer Frock",
    brand: "Max",
    color: "Brown",
    quantity: 1,
    price: 899,
    image: frockImg,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmitOrder = () => {
    alert("Order submitted successfully!");
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Your Shopping Cart</h2>
        {cartItems.map((item) => (
          <div className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-img" />
            <div className="cart-info">
              <p className="cart-name">{item.name}</p>
              <p className="cart-brand">{item.brand}</p>
              <p className="cart-quantity">Quantity: {item.quantity}</p>
              <p className="cart-unit-price">Price: ₹{item.price}</p>
              
            </div>
            <div className="cart-qty">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <p className="cart-total">₹{item.price * item.quantity}</p>
            <button className="cart-remove" onClick={() => handleRemove(item.id)}>
              ×
            </button>
          </div>
        ))}

        <div className="cart-footer">
          <p className="subtotal">Subtotal: ₹{subtotal}</p>
          <button className="submit-order-btn" onClick={handleSubmitOrder}>
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
