import React from 'react';

function App() {
  // 1. Core office object details
  const featuredOffice = {
    name: "Elite Corporate Hub",
    rent: 75000,
    address: "Tech Park Phase-2, Sector 62, Noida"
  };

  // 2. List of office space objects to loop through
  const officesList = [
    { id: 1, name: "Co-Working Nest", rent: 45000, address: "MG Road, Bengaluru" },
    { id: 2, name: "Premium Executive Suites", rent: 90000, address: "BKC Road, Mumbai" },
    { id: 3, name: "Startup Shared Space", rent: 55000, address: "Salt Lake Sector-V, Kolkata" },
    { id: 4, name: "Silicon Workspace", rent: 62000, address: "Hitec City, Hyderabad" }
  ];

  // Helper function to dynamically compute inline text color based on rent cost
  const getRentStyle = (rentAmount) => {
    return {
      color: rentAmount < 60000 ? '#d32f2f' : '#2e7d32', // Red for < 60k, Green for >= 60k
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      
      {/* Element to display the heading of the page */}
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', borderBottom: '3px solid #34495e', paddingBottom: '10px' }}>
          Office Space Rental Dashboard
        </h1>
      </header>

      {/* Featured Office Space Layout */}
      <div style={{ display: 'flex', gap: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '35px' }}>
        
        {/* Attribute displaying the image of the office space */}
        <div style={{ flex: '1' }}>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" 
            alt="Modern Office Space" 
            style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '200px' }} 
          />
        </div>

        {/* Display details of the primary Office Object */}
        <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#1a252f' }}>Featured Space: {featuredOffice.name}</h2>
          <p style={{ margin: '5px 0' }}><strong>Address:</strong> {featuredOffice.address}</p>
          <p style={{ margin: '5px 0' }}>
            <strong>Rent Amount:</strong> <span style={getRentStyle(featuredOffice.rent)}>₹{featuredOffice.rent.toLocaleString()} / Month</span>
          </p>
        </div>
      </div>

      {/* Looping through list of office space items to display more data */}
      <section>
        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Available Rental Listings</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {officesList.map((office) => (
            <div 
              key={office.id} 
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 10px 0', color: '#2980b9' }}>{office.name}</h3>
                <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
                  <strong>Address:</strong> {office.address}
                </p>
              </div>
              <div style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                <p style={{ margin: '0', fontSize: '15px' }}>
                  <strong>Rent:</strong>{' '}
                  <span style={getRentStyle(office.rent)}>
                    ₹{office.rent.toLocaleString()} / Month
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;