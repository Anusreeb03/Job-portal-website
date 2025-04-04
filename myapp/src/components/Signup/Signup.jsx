import React from 'react'
import ResumeTemplates from '../ResumeTemplates/ResumeTemplates'
import Mock from '../MockQ&A/Mock'
import InterviewPrepLinks from '../interview/InterviewPrepLinks'
import FAQ from '../FAQ/FAQ'
import Footer from'../Footer/Footer'
import './Signup.css'
function Signup() {
  return (
    <div className='services'>
      <h2>Services provided by Di-SHA</h2>
      <h1>1. Resume writing tips</h1>
      <div className="services-section">
        <ul>
          <li>Use a clear and easy-to-read font like Arial or Times New Roman.</li>
          <li>Tailor your resume to the specific job you're applying for.</li>
          <li>Highlight your achievements, not just job responsibilities.</li>
          <li>Keep your resume concise, ideally one page (two pages for experienced professionals).</li>
          <li>Include quantifiable results to demonstrate your impact (e.g., 'Increased sales by 20%').</li>
          <li>Check for spelling and grammar mistakes—proofread carefully.</li>
        </ul>
      </div>
      <h1>Resume templates</h1>
      <div className="template-section">
        <ResumeTemplates />
      </div>
      <h1>2. Interview Preparation tips</h1>
      <div className="mock-section">
        <Mock />
      </div>
      <div className="interview-section">
        <InterviewPrepLinks />
      </div>
      <div className="question-section">
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Signup
