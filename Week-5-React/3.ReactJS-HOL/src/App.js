import React, { Component } from 'react';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
          <h1>My Blog Portal</h1>
        </header>
        <Posts />
      </div>
    );
  }
}

export default App;