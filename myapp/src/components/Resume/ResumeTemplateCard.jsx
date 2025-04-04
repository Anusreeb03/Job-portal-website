const ResumeTemplateCard = ({ image, templateName, onClick }) => {
    return (
      <div className="template-card" onClick={() => onClick(templateName)}>
        <img src={image} alt={templateName} />
        <h3>{templateName}</h3>
      </div>
    );
  };
  
  const TemplateSelection = ({ onTemplateClick }) => {
    return (
      <div className="templates-container">
        <ResumeTemplateCard 
          image="template1.png" 
          templateName="Template 1"
          onClick={onTemplateClick} 
        />
        <ResumeTemplateCard 
          image="template2.png" 
          templateName="Template 2"
          onClick={onTemplateClick} 
        />
        <ResumeTemplateCard 
          image="template3.png" 
          templateName="Template 3"
          onClick={onTemplateClick} 
        />
      </div>
    );
  };
  