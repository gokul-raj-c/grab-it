import React from "react";
import shirtImg from "../../../assets/image/shirt.jpg";
import tshirtImg from "../../../assets/image/tshirt.jpg";
import jeansImg from "../../../assets/image/jeans.jpg";
import frockImg from "../../../assets/image/frock.jpg";
import skirtImg from "../../../assets/image/skirt.jpg";
import turtleneckImg from "../../../assets/image/turtleneck.jpg";
import shortsImg from "../../../assets/image/shorts.jpg";
import sareeImg from "../../../assets/image/saree.jpg";
import "./Clothings.css"; // using shared generic product styling
import Navbar from "../Navbar/Navbar";

const clothingItems = [
  {
    id: 1,
    name: "Shirt",
    brand: "Arrow",
    material: "Cotton, Slim Fit",
    price: 499,
    image: shirtImg,
  },
  {
    id: 2,
    name: "T-Shirt",
    brand: "H&M",
    material: "Organic Cotton, Regular Fit",
    price: 399,
    image: tshirtImg,
  },
  {
    id: 3,
    name: "Jeans",
    brand: "Levi's",
    material: "Denim, Skinny Fit",
    price: 999,
    image: jeansImg,
  },
  {
    id: 4,
    name: "Shorts",
    brand: "Levi's",
    material: "Denim, Mid Rise",
    price: 699,
    image: shortsImg,
  },
  {
    id: 5,
    name: "Frock",
    brand: "Max Fashion",
    material: "Rayon Blend, Flared Style",
    price: 799,
    image: frockImg,
  },
  {
    id: 6,
    name: "Skirt",
    brand: "Zara",
    material: "Polyester, High Waist",
    price: 599,
    image: skirtImg,
  },
  {
    id: 7,
    name: "Turtle Neck",
    brand: "Uniqlo",
    material: "Wool Blend, Slim Fit",
    price: 699,
    image: turtleneckImg,
  },
  {
    id: 8,
    name: "Saree",
    brand: "Biba",
    material: "Silk Blend",
    price: 1999,
    image: sareeImg,
  }
];

const Clothings = () => { // Receive addToCart as a props

  return (
    <div className="product-container">
        <Navbar></Navbar>
      {clothingItems.map((item) => (
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

export default Clothings;