import React from "react";
import laptopImg from "../assets/image/laptop.jpg";
import mobileImg from "../assets/image/mobile.jpg";
import tvImg from "../assets/image/smarttv.jpg";
import earbudsImg from "../assets/image/earbud.jpg";
import speakerImg from "../assets/image/speaker.jpg";
import tabletImg from "../assets/image/tablet.jpg";
import "../assets/css/product.css";

const electronicsItems = [
  {
    id: 1,
    name: "Laptop",
    brand: "HP",
    material: "i5, 8GB RAM, 512GB SSD",
    price: 47999,
    image: laptopImg,
  },
  {
    id: 2,
    name: "Mobile",
    brand: "Samsung",
    material: "6.5” Display, 128GB Storage",
    price: 18999,
    image: mobileImg,
  },
  {
    id: 3,
    name: "Smart TV",
    brand: "Sony Bravia",
    material: "43'' 4K HDR Android TV",
    price: 37999,
    image: tvImg,
  },
  {
    id: 4,
    name: "Earbuds",
    brand: "OnePlus",
    material: "Noise Cancellation, 30hr Battery",
    price: 2999,
    image: earbudsImg,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    brand: "Marshal",
    material: "Bass Boost, 12hr Battery",
    price: 4999,
    image: speakerImg,
  },
  {
    id: 6,
    name: "Tablet",
    brand: "Lenovo",
    material: "10.1'' Display, 4GB RAM",
    price: 15999,
    image: tabletImg,
  },
];

const Electronics = () => {
  return (
    <div className="product-page">
      <h1 className="page-title">Electronics</h1>
      <div className="items-list">
        {electronicsItems.map((item) => (
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
              <p className="product-rating">⭐ 9/10</p>
              <p className="product-description">
                <strong>Brand:</strong> {item.brand} <br />
                <strong>Specs:</strong> {item.material}
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

export default Electronics;
