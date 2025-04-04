import React from 'react'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import './About.css'


function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Di-sha, your trusted online job portal connecting talented individuals 
          with leading employers. Whether you're a job seeker looking for your next 
          career opportunity or an employer seeking top-tier talent, we are here to make your 
          journey easier.
          Di-sha is an online job portal leading individuals to the right career by
          providing thousands of job opportunities from companies all over India.
        </p>
        <h1>Our Mission</h1>
        <p>
          The mission of Di-sha is to empower job seekers by providing them with the 
          tools and resources to find their ideal job, while enabling employers to connect 
          with the best candidates to build successful teams. We strive to 
          foster a job market where everyone has an equal opportunity to succeed.
        </p>
        <h1>Why choose us?</h1>
        <ul>
          <li><b>Pan India</b>: Our platform connects job seekers and employers across India, 
          ensuring you find the right match no matter where you are.</li>
          <li><b>Focused</b>: We specialize in every industry, bringing you the most relevant
             job opportunities and talent.</li>
          <li><b>Diversity & Inclusion</b>: We believe in equal opportunity for all, and welcome individuals 
          from all backgrounds and experiences.</li>
          <li><b>Transparency</b>: We are committed to transparent job listings and fair recruitment practices.</li>
        </ul>
      </div>

      <div className="restart">
        <h3>Ready to restart your career <br /> or <br /> Open to work</h3>
        <button className="btn" onClick={handleClick}>Get started</button>
      </div>
      
        <Footer />
    </div>
    
  );
}

export default About;
