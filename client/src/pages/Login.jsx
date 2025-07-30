import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8080/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/studentDashboard');
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };

  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(5px)',
        position: 'relative',
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.85)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          maxWidth: '400px',
          width: '100%',
          zIndex: 2
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input name="email" placeholder="Email" onChange={handleChange} style={inputStyle}/>
            <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle}/>
            <button type="submit" style={buttonStyle}>Login</button>
            <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
              Don't have an account? <Link to="/register" style={{ color: '#4a90e2', textDecoration: 'none' }}>Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  backgroundColor: '#4a90e2',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease'
};

export default LoginForm;