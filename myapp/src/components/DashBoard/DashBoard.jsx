import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'; 
const DashBoard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <h2>Jobseeker Profile</h2>
      
      {user ? (
        <div className="user-profile">
          <div className="profile-header">
            <img 
              src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg" 
              alt="Profile" 
              className="profile-image" 
            />
            <div className="profile-info">
              <h3>{user.username || 'User'}</h3>
              <p>Email: {user.email}</p>
            </div>
          </div>

          
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="dashboard-sections">
        
        <div className="notifications">
          <h3>Notifications</h3>
          <ul>
            <li>New job opportunity: "Frontend Developer" in XYZ Company</li>
            <li>Message from recruiter: "Interested in your profile! Kindly check your mail for more details"</li>
          </ul>
        </div>

        <div className="activity">
          <h3>Your Activity</h3>
          <ul>
            <li>Applied for "Frontend Developer" on 28 February,2024</li>
            <li>Updated Profile on 8 March,2021</li>
          </ul>
        </div>

        <div className="job-listings">
          <h3>Recommended Jobs</h3>
          <ul>
            <li>Frontend Developer at XYZ Corp</li>
            <li>Node.js Developer at Intel Corp.</li>
            <li>UI/UX Designer at UX Studio</li>
          </ul>
        </div>
      </div>
      <div className="profile-actions">
            <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default DashBoard;
