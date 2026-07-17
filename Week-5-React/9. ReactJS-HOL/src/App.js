import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // Use state to make the flag interactive and easy to test
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Cricket App — ES6 Showcase</h1>
        <button 
          onClick={() => setFlag(!flag)} 
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: flag ? '#4CAF50' : '#008CBA',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: '0.3s'
          }}
        >
          Toggle Flag (Current: {flag.toString()})
        </button>
      </header>

      <main style={{ border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fafafa', minHeight: '300px' }}>
        {/* Simple if-else rendering based on the flag variable */}
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>
    </div>
  );
}

export default App;