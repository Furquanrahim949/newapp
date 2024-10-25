import React, { useState } from 'react';
import { useAddProductMutation } from '../api/apiSlice';

const ProductForm = () => {
  const sellerId = localStorage.getItem('sellerId');
  const category = localStorage.getItem('category');
  const [addProduct] = useAddProductMutation();

  const [formData, setFormData] = useState({ name: '', description: '', price: '', category });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addProduct({ ...formData, sellerId }).unwrap();
    alert('Product added successfully!');
    setFormData({ name: '', description: '', price: '', category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
