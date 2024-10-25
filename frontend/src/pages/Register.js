import React, { useState } from 'react';
import { useRegisterUserMutation } from '../api/apiSlice';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', category: 'medical' });
  const [registerUser] = useRegisterUserMutation();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(formData).unwrap();
    localStorage.setItem('sellerId', result.user._id);
    localStorage.setItem('category', result.user.category);
    alert('User registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="category" onChange={handleChange}>
        <option value="medical">Medical</option>
        <option value="non-medical">Non-Medical</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
