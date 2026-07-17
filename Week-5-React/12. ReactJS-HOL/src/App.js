import React, { useState } from 'react';
import FlightList from './FlightList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setBookedFlight(null);
  };

  const handleBooking = (flight) => {
    setBookedFlight(flight);
  };

  // --- Element Variables Demonstration ---
  // We store different JSX elements in variables depending on our condition.
  let welcomeMessage;
  let authButton;

  if (isLoggedIn) {
    welcomeMessage = (
      <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '12px', borderRadius: '6px', marginBottom: '15px' }}>
        <strong>Welcome, Registered User!</strong> You now have full clearance to secure flight bookings.
      </div>
    );
    authButton = (
      <button 
        onClick={handleLogout} 
        style={{ padding: '8px 16px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Logout
      </button>
    );
  } else {
    welcomeMessage = (
      <div style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '12px', borderRadius: '6px', marginBottom: '15px' }}>
        <strong>Browsing as Guest.</strong> You can view flight details. Please log in to request ticket bookings.
      </div>
    );
    authButton = (
      <button 
        onClick={handleLogin} 
        style={{ padding: '8px 16px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Login
      </button>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fdfdfd' }}>
      
      {/* Header section with flight graphic and controls */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #34495e', paddingBottom: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#2c3e50' }}>Horizon Airways</h2>
        {authButton} {/* Element Variable Render */}
      </header>

      {welcomeMessage} {/* Element Variable Render */}

      {/* Booking Confirmation Panel (Demonstrates preventing components/elements from rendering) */}
      {bookedFlight ? (
        <div style={{ border: '2px solid #27ae60', padding: '15px', borderRadius: '8px', backgroundColor: '#ebf5fb', marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#27ae60' }}>🎉 Ticket Booked Successfully!</h4>
          <p style={{ margin: '5px 0' }}><strong>Flight:</strong> {bookedFlight.id} ({bookedFlight.route})</p>
          <p style={{ margin: '5px 0' }}><strong>Seat Reserved:</strong> 12A (Window)</p>
        </div>
      ) : null} {/* Returning null prevents this block from rendering in the DOM */}

      {/* Core flight roster */}
      <FlightList isLoggedIn={isLoggedIn} onBookTicket={handleBooking} />

    </div>
  );
}

export default App;