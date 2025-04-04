import React, { useState } from "react";
import './Jobs.css';

const JobCard = ({ job }) => {
  const [bgColor, setBgColor] = useState('white'); 
  const [bookmarkColor, setBookmarkColor] = useState('black'); 
  const [applyStatus, setApplyStatus] = useState(false); 

  function changeBgColor() {
    setBgColor(bgColor === 'white' ? 'darkblue' : 'white'); 
    setBookmarkColor(bookmarkColor === 'black' ? 'white' : 'black'); 
  }

  function handleApply() {
    setApplyStatus(true); 
    alert("Do you want to continue?");
  }

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <h3>{job.company}</h3>
      <p><strong>Type:</strong> {job.type}</p>
      <span><i className="bx bxs-star" style={{color: "orangered", outline: "none", border: "none"}}>{job.rating}</i></span>
      <span>({job.reviews} reviews)</span>
      <p>
        <span><strong>Experience:</strong> {job.experience}</span>
        <span><strong>Location:</strong> {job.location}</span>
        <span><strong>Department:</strong> {job.department}</span>
      </p>
      <p>{job.description}</p>
      <p>{job.skills}</p>
      <p>
        <span>{job.day} days Ago</span>
        <span>
          <i 
            className="bx bx-bookmark" 
            title="click to save" 
            onClick={changeBgColor} 
            style={{ backgroundColor: bgColor, padding: '5px', borderRadius: '50%', color: bookmarkColor }} 
          >
          </i>
          <span style={{ color: bookmarkColor }}>Save</span> 
        </span>
        <button 
          className="choose" 
          title="click to apply for job" 
          onClick={handleApply} 
          style={{
            backgroundColor: applyStatus ? 'green' : '', 
            color: applyStatus ? 'white' : ''
          }}
        >
          {applyStatus ? 'Applied' : 'Apply'}
        </button>
      </p>
    </div>
  );
};

export default JobCard;
