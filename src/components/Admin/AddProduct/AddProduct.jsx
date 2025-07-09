import React, { useState } from "react";
import "./AddProduct.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const initialForm = {
    productname: "",
    brand: "",
    material: "",
    quantity: "",
    rating: "",
    price: "",
    category:"",
    photo: null,
    preview: null,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("product_name", formData.productname);
    productData.append("product_brand", formData.brand);
    productData.append("product_material", formData.material);
    productData.append("product_quantity", formData.quantity);
    productData.append("product_rating", formData.rating);
    productData.append("product_price", formData.price);
    productData.append("product_category", formData.category);
    productData.append("photo", formData.photo); // make sure multer expects "photo" in backend

    try {
      const response = await fetch("http://localhost:8010/addproduct", {
        method: "POST",
        body: productData,
      });

      const result = await response.json();

      if (response.status === 201) {
        alert("Product added successfully!");
        setFormData(initialForm);
        navigate("/admin"); // Optional redirect
      } else {
        alert(result.message || "Failed to add product.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="admin-layout">
      <AdminNavbar />
      <AdminSidebar />
      <div className="main-content">
        <div className="form-card">
          <h2 className="form-title">Add Product</h2>
          <form onSubmit={handleSubmit} className="form-fields" encType="multipart/form-data">
            <div className="form-group">
              <label>Product Image</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {formData.preview && <img src={formData.preview} alt="Preview" className="preview-image" />}
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input type="text" name="productname" value={formData.productname} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Brand</label>
              <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Material</label>
              <input type="text" name="material" value={formData.material} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <input type="text"  name="rating" value={formData.rating} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Price (₹)</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} />
            </div>

            <button type="submit" className="submit-button">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
