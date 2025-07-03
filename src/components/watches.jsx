import React from "react";
import analogImg from "../assets/image/analogwatch.jpg";
import digitalImg from "../assets/image/digitalwatch.jpg";
import smartwatchImg from "../assets/image/smartwatch.jpg";
import lWatchImg from "../assets/image/leatherwatch.jpg";
import sportsImg from "../assets/image/sportswatch.jpg";
import luxuryImg from "../assets/image/luxurywatch.jpg";
import "../assets/css/product.css";

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
];

const Watches = () => {
  return (
    <div className="product-page">
      <h1 className="page-title">Watches</h1>
      <div className="items-list">
        {watchItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="product-image"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/180x180?text=No+Image")
              }
            />
            <div className="product-details">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-rating">⭐ 8/10</p>
              <p className="product-description">
                <strong>Brand:</strong> {item.brand} <br />
                <strong>Features:</strong> {item.material}
              </p>
            </div>
            <div className="product-actions">
              <p className="product-price">₹{item.price}</p>
              <p className="product-shipping">Free Shipping</p>
              <button className="btn-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
