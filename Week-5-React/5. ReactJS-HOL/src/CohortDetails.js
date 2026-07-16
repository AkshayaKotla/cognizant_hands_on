import React from 'react';
// Step 8: Import the CSS Module
import styles from './CohortDetails.module.css';

const CohortDetails = ({ title, startDate, status, strength }) => {
  // Step 10: Define dynamic color styling based on status
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue',
    marginTop: '0px'
  };

  return (
    // Step 9: Apply the box class from the imported CSS module
    <div className={styles.box}>
      <h3 style={headingStyle}>{status.toUpperCase()}</h3>
      <dl>
        <dt>Cohort Title</dt>
        <dd>{title}</dd>
        
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        
        <dt>Strength</dt>
        <dd>{strength}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;