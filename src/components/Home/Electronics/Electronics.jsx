import React from "react";
import laptopImg from "../../../assets/image/laptop.jpg";
import mobileImg from "../../../assets/image/mobile.jpg";
import tvImg from "../../../assets/image/smarttv.jpg";
import earbudsImg from "../../../assets/image/earbud.jpg";
import speakerImg from "../../../assets/image/speaker.jpg";
import tabletImg from "../../../assets/image/tablet.jpg";
import cameraImg from "../../../assets/image/camera.jpg";
import consoleImg from "../../../assets/image/console.jpg";
import "./Electronics.css";
import Navbar from "../Navbar/Navbar";

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
  {

    id: 7,
    name: "Camera",
    brand: "Canon",
    material: "EOS 1500D, 24.1MP DSLR",
    price: 34999,
    image: cameraImg,
  },
  {
    id: 8,
    name: "Gaming Console",
    brand: "Sony PlayStation",
    material: "PS5, DualSense Controller",
    price: 49990,
    image: consoleImg,
 }
];

const Electronics = () => {
  return (
    <div className="product-container">
        <Navbar></Navbar>
      {electronicsItems.map((item) => (
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

export default Electronics;