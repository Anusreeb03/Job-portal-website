import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css'
import Footer from '../Footer/Footer';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email }));
        navigate('/dashboard');
      } else {
        alert('Please fill in both fields');
      }
    } else {

      if (email && password && username) {
        localStorage.setItem('user', JSON.stringify({ email, username }));
        navigate('/dashboard');
      } else {
        alert('Please fill in all fields');
      }
    }
  };

  return (
    <>
    <div className='contain'>
      <div className="auth-container">
      <div className="auth-header">
        <h2 
          onClick={() => setIsLogin(true)} 
          className={isLogin ? 'active' : ''}
        >
          Login
        </h2>
        <h2 
          onClick={() => setIsLogin(false)} 
          className={!isLogin ? 'active' : ''}
        >
          Sign Up
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <div className="form-group">
            <label>Username</label><br />
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Email</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>

        <button  type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
    
    </div>
    <Footer />
    </>
  );
};

export default Login;
