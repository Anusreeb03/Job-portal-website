import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';  
import Home from './components/Home/Home';
import About from './components/About/About';
import Jobs1 from './components/Jobs/Jobs1';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import DashBoard from './components/DashBoard/DashBoard';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>Di-SHA</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">&#9776;</span> 
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className='btn'>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)} className='btn'>Account</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>

      
    
    </div>
  );
}

export default App;
