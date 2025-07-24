import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () =>  {
  const [formData, setFormData] = useState({ name: '',username: '', role: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      await axios.post('http://127.0.0.1:8080/api/auth/register', formData);
      alert('Registration successful');
    } catch (err) {
      alert(err.response.data.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;