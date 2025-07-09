import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./ViewProduct.css";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:8010/getproduct");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const res = await fetch(`http://localhost:8010/deleteproduct/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          alert("Product deleted successfully.");
          fetchProducts();
        } else {
          alert("Failed to delete.");
        }
      } catch (err) {
        alert("Server error.");
        console.error(err);
      }
    }
  };

  // Update stock by adding to current quantity
  const handleUpdateStock = async (id, currentQty) => {
    const addedQty = prompt("Enter quantity to add to current stock:");
    if (!addedQty || isNaN(addedQty)) {
      return alert("Please enter a valid number.");
    }

    const newQty = Number(currentQty) + Number(addedQty);

    try {
      const res = await fetch(`http://localhost:8010/updatestock/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQty }),
      });

      if (res.ok) {
        alert("Stock updated.");
        fetchProducts();
      } else {
        alert("Failed to update stock.");
      }
    } catch (err) {
      alert("Server error.");
      console.error(err);
    }
  };

  return (
    <div className="admin-layout">
      <AdminNavbar />
      <AdminSidebar />

      <div className="main-content">
        <h2 className="page-title">Product Dashboard</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`http://localhost:8010/uploads/${product.product_photo}`}
                alt={product.product_name}
                className="product-img"
              />
              <div className="product-details">
                <h3>{product.product_name}</h3>
                <p><strong>Brand:</strong> {product.product_brand}</p>
                <p><strong>Material:</strong> {product.product_material}</p>
                <p><strong>Category:</strong> {product.product_category}</p>
                <p><strong>Stock:</strong> {product.product_quantity}</p>
                <p><strong>Rating:</strong> ⭐ {product.product_rating}</p>
                <p><strong>Price:</strong> ₹{product.product_price}</p>
                <p><strong>Status:</strong> 
                  <span className={product.product_quantity > 0 ? "in-stock" : "out-of-stock"}>
                    {product.product_quantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <div className="btn-group">
                  <button
                    onClick={() => handleUpdateStock(product._id, product.product_quantity)}
                    className="update-btn"
                  >
                    Update Stock
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {products.length === 0 && <p>No products found.</p>}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
