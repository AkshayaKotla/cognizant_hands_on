import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Student Management Portal</h1>
      <hr style={{ maxWidth: '500px', margin: '10px auto' }} />
      {/* Invoking our component and passing props */}
      <CalculateScore 
        Name="Steve Rogers" 
        School="Brooklyn High School" 
        Total={450} 
        Goal={5} 
      />
    </div>
  );
}

export default App;