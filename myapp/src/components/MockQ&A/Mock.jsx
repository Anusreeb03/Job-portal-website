import React, { useState } from 'react';
import './Mock.css'; 

const Mock = () => {
  const questions = [
    {
      id: 1,
      question: "Tell me about a time when you had to overcome a challenge.",
      answer: "In my previous job, I faced a challenge when we had tight deadlines on a project. I organized a team meeting to assess everyone's strengths, delegated tasks accordingly, and communicated regularly to ensure we stayed on track. As a result, we delivered the project ahead of schedule."
    },
    {
      id: 2,
      question: "Describe a time when you worked successfully in a team.",
      answer: "At my last job, I collaborated with a cross-functional team to improve our customer service processes. We held regular meetings, listened to everyone's input, and collectively implemented a new workflow that reduced response time by 25%. It was a great team effort."
    },
    {
      id: 3,
      question: "Tell me about a time when you showed leadership skills.",
      answer: "During a project, our team leader was unavailable, so I took the initiative to step up and organize tasks. I ensured clear communication and motivated the team by recognizing small achievements. The project was a success, and we exceeded our targets."
    },
    {
      id: 4,
      question: "Can you describe a situation where you had to handle a difficult customer or client?",
      answer: "A client once expressed dissatisfaction with our service. I listened actively to their concerns, empathized with their frustration, and worked with the team to provide a tailored solution. The client left happy and even praised our responsiveness, which strengthened the relationship."
    },
    {
      id: 5,
      question: "Tell me about a time when you had to adapt to a significant change at work.",
      answer: "When our company implemented new software, it was a huge change for everyone. I quickly familiarized myself with the new system, attended training sessions, and helped others learn it. This helped our team transition smoothly and maintain productivity."
    }
  ];

  
  const [activeQuestion, setActiveQuestion] = useState(null);

  
  const toggleAnswer = (id) => {
    
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="behavioral-interview-questions">
      <h2>Common Behavioral Interview Questions</h2>
      <div className="questions-list">
        {questions.map((item) => (
          <div key={item.id} className="question-card">
            <div className="question">
              <p>{item.question}</p>
              <button 
                onClick={() => toggleAnswer(item.id)} 
                className="toggle-answer-btn"
              >
                {activeQuestion === item.id ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
           
            {activeQuestion === item.id && (
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

export default Mock;
