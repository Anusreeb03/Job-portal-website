import React, { useState } from 'react';
import './FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqData = [
    {
      question: "How do I create a job seeker profile?",
      answer: "To create a job seeker profile, click on the 'Sign Up' button on the homepage, fill in your personal details, upload your resume, and complete your profile with your skills and experience."
    },
    {
      question: "How can I post a job listing as an employer?",
      answer: "As an employer, you can post a job listing by creating an employer profile and clicking on the 'Post a Job' button. Fill in the job description, requirements, and other details, and submit it for approval."
    },
    {
      question: "How do I receive job alerts?",
      answer: "You can receive job alerts by setting your job preferences during your profile setup. You'll be notified about job openings that match your criteria via email or app notifications."
    },
    {
      question: "Can I apply for multiple jobs at once?",
      answer: "Yes, you can apply for multiple jobs by saving the listings you're interested in and submitting your application to each job individually from your profile."
    },
    {
      question: "Is there a fee to post a job?",
      answer: "Posting a job is free for basic listings"
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact customer support by visiting the 'Contact Us' section in the footer of the website."
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className="faq-container">
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
