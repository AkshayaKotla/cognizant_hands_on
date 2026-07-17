import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [counter, setCounter] = useState(0);

  // 1. Handles the counter increment and invokes multiple actions
  const handleIncrement = (syntheticEvent) => {
    // Action A: To increment the value
    setCounter((prev) => prev + 1);
    
    // Action B: Say Hello followed by a static message
    console.log("Hello! The counter value has been updated.");
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  // 2. Invokes a function taking a custom greeting argument
  const handleSayWelcome = (msg) => {
    alert(`Greeting Received: ${msg}`);
  };

  // 3. Demonstrates the Synthetic Event object
  const handleSyntheticEvent = (event) => {
    // event is the Synthetic Event passed by React
    alert(`I was clicked! (Event Type: ${event.type})`);
    console.log("React Synthetic Event Details:", event);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '30px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>React Event Handler Lab</h1>
      <hr />

      {/* Counter Controls Block */}
      <section style={{ margin: '20px 0', padding: '15px', border: '1px dashed #bbb', borderRadius: '8px' }}>
        <h3>1. Counter Actions (Multi-Method Handler)</h3>
        <p style={{ fontSize: '18px' }}>Counter Value: <strong>{counter}</strong></p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleIncrement} 
            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Increment
          </button>
          <button 
            onClick={handleDecrement} 
            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Decrement
          </button>
        </div>
      </section>

      {/* Argument Passing Block */}
      <section style={{ margin: '20px 0', padding: '15px', border: '1px dashed #bbb', borderRadius: '8px' }}>
        <h3>2. Passing Arguments to Handlers</h3>
        <button 
          onClick={() => handleSayWelcome("welcome")} 
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ffc107', color: '#212529', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
        >
          Say Welcome
        </button>
      </section>

      {/* Synthetic Event Block */}
      <section style={{ margin: '20px 0', padding: '15px', border: '1px dashed #bbb', borderRadius: '8px' }}>
        <h3>3. Synthetic Event (OnPress Equivalent)</h3>
        <button 
          onClick={handleSyntheticEvent} 
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          OnPress Event Tester
        </button>
      </section>

      {/* Currency Converter Section */}
      <CurrencyConverter />
    </div>
  );
}

export default App;