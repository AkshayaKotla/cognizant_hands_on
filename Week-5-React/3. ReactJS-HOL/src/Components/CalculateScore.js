import React from 'react';
import '../Stylesheets/mystyle.css';

// Functional Component accepting props
const CalculateScore = ({ Name, School, Total, Goal }) => {
  // Simple calculation for average score
  const average = Total / Goal;

  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <p><strong>Student Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Goal (Total Subjects):</strong> {Goal}</p>
      <div className="average-box">
        <h3>Average Score: {average.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CalculateScore;