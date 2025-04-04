import React, { useState, useEffect } from 'react';
import './LogoSlider.css';

const logos = [
  { id: 1, src: 'https://png.pngtree.com/png-vector/20201026/ourmid/pngtree-simple-vector-text-effect-with-transparent-background-png-image_102984.jpg', alt: 'Logo 1' },
  { id: 2, src: 'https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg', alt: 'Logo 2' },
  { id: 3, src: 'https://img.freepik.com/premium-vector/letter-s-logo-design-template_681147-335.jpg?w=360', alt: 'Logo 3' },
  { id: 4, src: 'https://www.dsource.in/sites/default/files/resource/logo-design/logos/classic-logos-india/images/11.jpeg', alt: 'Logo 4' },
  { id: 5, src: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg', alt: 'Logo 5' },
  { id: 6, src: 'https://freedesignfile.com/upload/2016/12/Company-creative-logos-with-colored-polygon-background-vector-04.jpg', alt: 'Logo 6' },
  { id: 7, src: 'https://png.pngtree.com/png-clipart/20201109/ourmid/pngtree-free-text-effect-editable-png-image_103300.jpg', alt: 'Logo 7' },
  { id: 8, src: 'https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg', alt: 'Logo 8' },
  { id: 9, src: 'https://img.freepik.com/premium-vector/letter-s-logo-design-template_681147-335.jpg?w=360', alt: 'Logo 9' },
  { id: 10, src: 'https://www.dsource.in/sites/default/files/resource/logo-design/logos/classic-logos-india/images/11.jpeg', alt: 'Logo 10' },
  { id: 11, src: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg', alt: 'Logo 11' },
  { id: 12, src: 'https://img.freepik.com/free-vector/letter-x-colorful-gradient-logo-design_474888-2227.jpg?semt=ais_hybrid', alt: 'Logo 12' },
];

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logos.length - 1 ? 0 : prevIndex + 1
    );
  };

 
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <h2 style={{color:"darkblue"}}>Featured companies actively hiring</h2>
    <div className="logo-slider">
      <div className="logos-container">
        {logos.slice(currentIndex, currentIndex + 4).map((logo) => (
          <div key={logo.id} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LogoSlider;
