import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import Sidebar from './Sidebar';
import './Jobs.css';
import Footer from '../Footer/Footer'
import fetchedData from '../StaticData/data'; 

function Jobs1() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  useEffect(() => {
    setJobs(fetchedData); 
    setFilteredJobs(fetchedData); 
  }, []);

  const handleFilterChange = (filters) => {
    let newFilteredJobs = jobs;
    if (filters.type) {
      newFilteredJobs = newFilteredJobs.filter(job => job.type === filters.type);
    }
    if (filters.location) {
      newFilteredJobs = newFilteredJobs.filter(job => job.location === filters.location);
    }
    if (filters.department) {
      newFilteredJobs = newFilteredJobs.filter(job => job.department === filters.department);
    }
    if (filters.experience) {
      newFilteredJobs = newFilteredJobs.filter(job => job.experience === filters.experience);
    }
    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1); 
  };

  const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handlePagination = (direction) => {
    if (direction === "next" && currentPage < Math.ceil(filteredJobs.length / jobsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className='app'>
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="job-listings">
        <JobList jobs={currentJobs} />
        <div className="pagination">
          <button onClick={() => handlePagination("prev")} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button onClick={() => handlePagination("next")} disabled={currentPage === Math.ceil(filteredJobs.length / jobsPerPage)}>
            Next
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Jobs1;
