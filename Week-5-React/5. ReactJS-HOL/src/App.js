import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  // Sample data simulating ongoing and completed academy cohorts
  const cohorts = [
    { id: 1, title: 'Java Full Stack Developer', startDate: '12-Jan-2026', status: 'ongoing', strength: 24 },
    { id: 2, title: 'React JS Fundamentals', startDate: '01-Feb-2026', status: 'ongoing', strength: 18 },
    { id: 3, title: 'Python for Data Science', startDate: '15-Nov-2025', status: 'completed', strength: 30 },
    { id: 4, title: 'Cloud Native AWS Practitioner', startDate: '05-Dec-2025', status: 'completed', strength: 15 }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Academy Cohort Dashboard</h1>
      </header>
      
      <div>
        {cohorts.map((cohort) => (
          <CohortDetails
            key={cohort.id}
            title={cohort.title}
            startDate={cohort.startDate}
            status={cohort.status}
            strength={cohort.strength}
          />
        ))}
      </div>
    </div>
  );
}

export default App;