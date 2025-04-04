import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    subheading: 'Customer Testimonial',
    heading: 'Amazing Experience!',
    feedback: 'Being an active member in Di-sha, I was able to find reliable job oppurtunities with high salary. The platform is efficient and user-friendly.',
    name: 'Johnson Thomas',
    position: 'Software Engineer',
    company: 'Techilla',
  },
  {
    subheading: 'Customer Testimonial',
    heading: 'Life-Changing!',
    feedback: "I was stuck in my career, but Di-SHA's guidance helped me land a better role with more opportunities.",
    name: 'Ann Mariya',
    position: 'Business Development Executive',
    company: 'Creative Crew.',
  },
  {
    subheading: 'Customer Testimonial',
    heading: 'Highly Recommend!',
    feedback: 'Di-sha helped me to land on my dream job! The job search tools and resume builder were incredibly easy to use.',
    name: 'Nayana',
    position: 'Frontend Developer',
    company: 'Innovative marks',
  },
  {
    subheading: 'Customer Testimonial',
    heading: 'Highly Reliable!',
    feedback: 'I was able to find reliable job oppurtunities with high salary. The platform is efficient and user-friendly. Thank you!',
    name: 'Alice',
    position: 'UI/UX Designer',
    company: 'UX Studio',
  },
  {
    subheading: 'Customer Testimonial',
    heading: 'Impressive Results!',
    feedback: 'I have seen a major improvement in my learning since using this platform.',
    name: 'Bob Williams',
    position: 'Python Developer',
    company: 'Innovate Hub',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const {subheading, heading, feedback, name,position, company } = testimonials[currentIndex];

  return (
    <div className='test'>
      <h1>What our users say about us..</h1>
        <div className="testimonial-container">
            <div className="testimonial-image">
                <img src="https://thumb.ac-illust.com/d4/d4ce188767d4b9d6e5afd8b09d597624_t.jpeg" alt="" />
            </div>
            <div className="testimonial-text">
                <h3 className="testimonial-subheading">{subheading}</h3>
                <h2 className="testimonial-heading">{heading}</h2>
                <p className="testimonial-feedback">{feedback}</p>
                <p className="testimonial-name">{name}</p>
                <p className="testimonial-position">{position}</p>
                <p className="testimonial-company">{company}</p>
            </div>
        </div>
    </div>
  );
};

export default TestimonialSlider;
