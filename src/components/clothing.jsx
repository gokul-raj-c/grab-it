import React from "react";
import shirtImg from "../assets/image/shirt.jpg";
import tshirtImg from "../assets/image/tshirt.jpg";
import jeansImg from "../assets/image/jeans.jpg";
import frockImg from "../assets/image/frock.jpg";
import skirtImg from "../assets/image/skirt.jpg";
import turtleneckImg from "../assets/image/turtleneck.jpg";
import "../assets/css/clothing.css"; // using shared generic product styling

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
    material: "100% Organic Cotton, Regular Fit",
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
    name: "Frock",
    brand: "Max Fashion",
    material: "Rayon Blend, Flared Style",
    price: 799,
    image: frockImg,
  },
  {
    id: 5,
    name: "Skirt",
    brand: "Zara",
    material: "Polyester, High Waist",
    price: 599,
    image: skirtImg,
  },
  {
    id: 6,
    name: "Turtle Neck",
    brand: "Uniqlo",
    material: "Wool Blend, Slim Fit",
    price: 699,
    image: turtleneckImg,
  },
];

const Clothing = () => {
  return (
    <div className="clothing-page">
  <h1 className="page-title">Clothing</h1>
  <div className="clothing-list">
    {clothingItems.map((item) => (
      <div className="clothing-card" key={item.id}>
        <img
          src={item.image}
          alt={item.name}
          className="clothing-image"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/180x180?text=No+Image")
          }
        />
        <div className="clothing-details">
          <h2 className="clothing-name">{item.name}</h2>
          <p className="clothing-rating">⭐ 7/10</p>
          <p className="clothing-description">
            <strong>Brand:</strong> {item.brand} <br />
            <strong>Details:</strong> {item.material}
          </p>
        </div>
        <div className="clothing-actions">
          <p className="clothing-price">₹{item.price}</p>
          <p className="clothing-shipping">Free Shipping</p>
          <button className="clothing-btn">Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Clothing;
