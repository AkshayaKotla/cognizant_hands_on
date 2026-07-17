import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  // Approximate exchange rate (e.g., 1 EUR = 90 INR)
  const EXCHANGE_RATE = 0.011; 

  const handleSubmit = (event) => {
    // Handling the synthetic form event to prevent default page reload behavior
    event.preventDefault();
    
    const amount = parseFloat(rupees);
    if (!isNaN(amount) && amount >= 0) {
      const converted = (amount * EXCHANGE_RATE).toFixed(2);
      setEuros(converted);
    } else {
      setEuros(null);
      alert("Please enter a valid amount in Rupees.");
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
      <h3>Currency Converter (INR to EUR)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Amount in Rupees (₹):</label>
          <input 
            type="number" 
            value={rupees} 
            onChange={(e) => setRupees(e.target.value)} 
            placeholder="Enter Amount"
            style={{ padding: '8px', width: '90%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button 
          type="submit" 
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Convert
        </button>
      </form>

      {euros !== null && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e2f0d9', borderRadius: '4px' }}>
          <strong>Equivalent in Euros:</strong> €{euros}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;