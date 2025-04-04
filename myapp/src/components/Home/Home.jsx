import React, { useState } from 'react';
import './Home.css'; 
import LogoSlider from '../LogoSlider/LogoSlider'
import Footer from '../Footer/Footer';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'

function Home() {
  const images = [
    {url:"https://st4.depositphotos.com/14101486/28582/i/450/depositphotos_285825536-stock-photo-human-resources-crm-and-recruitment.jpg",
      text:"Find your dream job"
    },
    {url:"https://img.freepik.com/premium-photo/keyboard-coffee-smartphone-notebook-color-background-top-view_1286-776.jpg?semt=ais_hybrid",
      text:"Explore job opportunities"
    },
    {url:"https://disabilityinsider.com/wp-content/uploads/2022/02/close-up-hand-with-laptop-838x525.jpg",
      text:"Join a Talent Network"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  
  return (
    <>
      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-btn prev"><i className="bx bx-chevron-left"></i></button>
        <div className="carousel-slide">
          <img src={images[currentIndex].url} alt={`Slide ${currentIndex}`} />
          <h2 className="title">{images[currentIndex].text}</h2>
        </div>
        <button onClick={nextSlide} className="carousel-btn next"><i className="bx bx-chevron-right"></i></button>
      </div>

      <div>
        <div className="categories">
          <h1>Popular Categories</h1>
          <div className="categories_container">
            <div className="col">
              <i className='bx bx-desktop'></i>
              <h3>UI/UX Designer</h3>
            </div>
            <div className="col">
              <i className='bx bx-rupee'></i>
              <h3>Finance & Banking</h3>
            </div>
            <div className="col">
              <i className='bx bx-bar-chart'></i>
              <h3>Sales & Marketing</h3>
            </div>
            <div className="col">
              <i className='bx bxl-android'></i>
              <h3>Web & App Development</h3>
            </div>
            <div className="col">
              <i className='bx bxs-data'></i>
              <h3>Data Analytics</h3>
            </div>
            <div className="col">
              <i className='bx bxs-data'></i>
              <h3>Data Science</h3>
            </div>
            <div className="col">
              <i className='bx bxs-devices'></i>
              <h3>Digital Marketing</h3>
            </div>
            <div className="col">
              <i className='bx bxs-business'></i>
              <h3>Business Development Executives</h3>
            </div>
            <div className="col">
              <i className='bx bx-microchip'></i>
              <h3>Engineering</h3>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />
      <TestimonialSlider />
      <Footer />
    </>
  );
}

export default Home;
