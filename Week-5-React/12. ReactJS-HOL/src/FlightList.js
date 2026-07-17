import React from 'react';

const FlightList = ({ isLoggedIn, onBookTicket }) => {
  const flights = [
    { id: 'AI-101', route: 'Delhi (DEL) ➔ Mumbai (BOM)', time: '08:00 AM', price: '₹5,500' },
    { id: '6E-502', route: 'Bengaluru (BLR) ➔ Delhi (DEL)', time: '11:30 AM', price: '₹6,200' },
    { id: 'UK-815', route: 'Hyderabad (HYD) ➔ Chennai (MAA)', time: '04:15 PM', price: '₹3,800' }
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ color: '#2c3e50' }}>Available Flights</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {flights.map((flight) => (
          <div 
            key={flight.id} 
            style={{
              padding: '15px', 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '12px', background: '#eee', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold', color: '#555' }}>
                {flight.id}
              </span>
              <h4 style={{ margin: '5px 0' }}>{flight.route}</h4>
              <small style={{ color: '#777' }}>Departure: {flight.time}</small>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '18px', fontWeight: 'bold', color: '#2c3e50', marginBottom: '8px' }}>
                {flight.price}
              </span>
              
              {/* Conditional Rendering using element variables logic */}
              {isLoggedIn ? (
                <button 
                  onClick={() => onBookTicket(flight)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#e67e22',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Book Ticket
                </button>
              ) : (
                <span style={{ fontSize: '12px', color: '#7f8c8d', fontStyle: 'italic' }}>
                  Log in to book tickets
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;