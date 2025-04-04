import React from 'react';
import './ResumeTemplates.css';  

const ResumeTemplates = () => {
  const templates = [
    {
      id: 1,
      name: 'Professional Template',
      description: 'A clean, modern, and professional resume template suitable for corporate roles.',
      img: '/images/professional-template.PNG', 
      downloadLink: '/templates/professional-template.docx', 
    },
    {
      id: 2,
      name: 'Creative Template',
      description: 'A vibrant and creative resume template perfect for design or marketing positions.',
      img: '/images/creative-template.PNG',
      downloadLink: '/templates/creative-template.docx',  
    },
    {
      id: 3,
      name: 'Minimalist Template',
      description: 'A sleek, minimalist design with a focus on simplicity and clarity.',
      img: '/images/minimalist-template.PNG',
      downloadLink: '/templates/minimalist-template.docx',  
    }
  ];

  return (
    <div className="resume-templates-section">
      <h2>Choose Your Resume Template</h2>
      <div className="resume-templates-container">
        {templates.map((template) => (
          <div key={template.id} className="resume-template-card">
            <img src={template.img} alt={template.name} className="template-image" />
            <div className="template-info">
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <a href={template.downloadLink} download className="download-button">
                Download Template
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;

