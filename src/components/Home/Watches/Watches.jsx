import React from "react";
import analogImg from "../../../assets/image/analogwatch.jpg";
import digitalImg from "../../../assets/image/digitalwatch.jpg";
import smartwatchImg from "../../../assets/image/smartwatch.jpg";
import lWatchImg from "../../../assets/image/leatherwatch.jpg";
import sportsImg from "../../../assets/image/sportswatch.jpg";
import luxuryImg from "../../../assets/image/luxurywatch.jpg";
import chronoImg from "../../../assets/image/chrono.jpg";
import minimalistImg from "../../../assets/image/minimal.jpg";
import "./Watches.css"; // using shared generic product styling
import Navbar from "../Navbar/Navbar";

const watchItems = [
  {
    id: 1,
    name: "Analog Watch",
    brand: "Titan",
    material: "Leather Strap, Water Resistant",
    price: 1999,
    image: analogImg,
  },
  {
    id: 2,
    name: "Digital Watch",
    brand: "Casio",
    material: "LED Display, Alarm & Timer",
    price: 1499,
    image: digitalImg,
  },
  {
    id: 3,
    name: "Smartwatch",
    brand: "Noise",
    material: "Bluetooth Calling, Fitness Tracker",
    price: 2999,
    image: smartwatchImg,
  },
  {
  id: 4,
  name: "Leather Watch",
  brand: "Fossil",
  material: "Genuine Leather Strap, Quartz Movement",
  price: 4599,
  image: lWatchImg,
  },
  {
    id: 5,
    name: "Sports Watch",
    brand: "boAt",
    material: "SpO2, Heart Rate Monitor",
    price: 1999,
    image: sportsImg,
  },
  {
    id: 6,
    name: "Luxury Watch",
    brand: "Rolex",
    material: "Gold Plated, Water Proof",
    price: 120000,
    image: luxuryImg,
  },
  { 
    id: 7,
    name: "Chronograph Watch",
    brand: "Timex",
    material: "Stainless Steel, Stopwatch Function",
    price: 3799,
    image: chronoImg,
 },
 {
    id: 8,
    name: "Minimalist Watch",
    brand: "Daniel Wellington",
    material: "Slim Design, Leather Strap",
    price: 5499,
    image: minimalistImg,
 }
];

const Watches = () => { // Receive addToCart as a props

  return (
    <div className="product-container">
        <Navbar></Navbar>
      {watchItems.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.name} className="product-image" />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-name">{item.brand}</p>
          <p className="product-name">{item.material}</p>
          <p className="product-price">₹{item.price}</p>
          <button className="add-to-cart">Shop Now</button>
        </div>
      ))}
    </div>
  );
};

export default Watches;