import React from "react";
import './Interview.css'

const InterviewPrepLinks = () => {
  const links = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/",
      description: "Practice coding problems for technical interviews."
    },
    {
      name: "indiabix.com",
      url: "https://www.indiabix.com/",
      description: "Practice aptitude questions and answers for your placement interviews and competitive exams."
    },
    {
      name: "W3Schools",
      url: "https://www.w3schools.com/",
      description: "Articles, tutorials, and interview questions."
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/",
      description: "Computer science articles, tutorials, and interview questions."
    },
  ];

  return (
    <div className="interview">
      <h2>Interview Preparation Resources</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank">
              <strong>{link.name}</strong>
            </a>
            <p>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewPrepLinks;
