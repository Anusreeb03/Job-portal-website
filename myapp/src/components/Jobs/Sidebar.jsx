import React, { useState } from "react";
import './Jobs.css'

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    department: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <div>
        <label>Job Type</label>
        <select name="type" onChange={handleChange}>
          <option value="">All</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="work from home">Work from home</option>
        </select>
      </div>
      <div>
        <label>Location</label>
        <select name="location" onChange={handleChange}>
          <option value="">All</option>
          <option value="Kochi">Kochi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Indore">Indore</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New-Delhi">New-Delhi</option>
          <option value="Thiruvanathapuram">Thiruvanathapuram</option>
          <option value="Chennai">Chennai</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Shimla">Shimla</option>
          <option value="Guwahati">Guwahati</option>
        </select>
      </div>
      <div>
        <label>Department</label>
        <select name="department" onChange={handleChange}>
          <option value="">All</option>
          <option value="engineering">Engineering</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="Finance & Banking">Finance & Banking</option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Data Science">Data Science</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Business Development Executives">Business Development Executives</option>
        </select>
      </div>
      <div>
        <label>Experience</label>
        <select name="experience" onChange={handleChange}>
          <option value="">All</option>
          <option value="entry-level">Entry Level</option>
          <option value="mid-level">Mid Level</option>
          <option value="senior-level">Senior Level</option>
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply filter</button>
    </div>
  );
};

export default Sidebar;

