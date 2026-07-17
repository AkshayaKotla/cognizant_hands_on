import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selectedView, setSelectedView] = useState('books'); // options: 'books', 'blogs', 'courses'
  const [showHelperPanel, setShowHelperPanel] = useState(true);

  // --- 1. IF-ELSE Conditional Rendering Method ---
  const renderSelectedComponent = () => {
    if (selectedView === 'books') {
      return <BookDetails />;
    } else if (selectedView === 'blogs') {
      return <BlogDetails />;
    } else if (selectedView === 'courses') {
      return <CourseDetails />;
    } else {
      return null;
    }
  };

  // --- 2. Element Variables Conditional Rendering Method ---
  let headerNotice;
  if (selectedView === 'books') {
    headerNotice = <p style={{ margin: 0, color: '#e67e22' }}>📖 Currently viewing catalog titles.</p>;
  } else if (selectedView === 'blogs') {
    headerNotice = <p style={{ margin: 0, color: '#2b6cb0' }}>✍️ Currently viewing published columns.</p>;
  } else {
    headerNotice = <p style={{ margin: 0, color: '#2f855a' }}>🎓 Currently viewing curriculum details.</p>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '650px', margin: '30px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: '#fafafa' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '25px', borderBottom: '2px solid #eaeaea', paddingBottom: '15px' }}>
        <h1 style={{ color: '#2d3748', margin: '0 0 10px 0' }}>The Knowledge Hub</h1>
        <div style={{ background: '#edf2f7', padding: '8px', borderRadius: '6px', fontSize: '14px' }}>
          {headerNotice} {/* Render using Element Variable */}
        </div>
      </header>

      {/* View Switcher Controls */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '25px' }}>
        <button 
          onClick={() => setSelectedView('books')}
          style={{ padding: '10px 15px', cursor: 'pointer', border: 'none', borderRadius: '5px', fontWeight: 'bold', background: selectedView === 'books' ? '#e67e22' : '#e2e8f0', color: selectedView === 'books' ? '#fff' : '#4a5568' }}
        >
          Books
        </button>
        <button 
          onClick={() => setSelectedView('blogs')}
          style={{ padding: '10px 15px', cursor: 'pointer', border: 'none', borderRadius: '5px', fontWeight: 'bold', background: selectedView === 'blogs' ? '#2b6cb0' : '#e2e8f0', color: selectedView === 'blogs' ? '#fff' : '#4a5568' }}
        >
          Blogs
        </button>
        <button 
          onClick={() => setSelectedView('courses')}
          style={{ padding: '10px 15px', cursor: 'pointer', border: 'none', borderRadius: '5px', fontWeight: 'bold', background: selectedView === 'courses' ? '#2f855a' : '#e2e8f0', color: selectedView === 'courses' ? '#fff' : '#4a5568' }}
        >
          Courses
        </button>
      </div>

      {/* Main Panel displaying the Active Component */}
      <div style={{ minHeight: '180px', marginBottom: '25px' }}>
        {/* Render using the IF-ELSE helper function */}
        {renderSelectedComponent()}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />

      {/* --- 3. Short-Circuit Logical AND (&&) Rendering Method --- */}
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <button 
          onClick={() => setShowHelperPanel(!showHelperPanel)}
          style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', borderRadius: '4px', background: '#cbd5e0', border: 'none' }}
        >
          {showHelperPanel ? 'Hide Debug Helper' : 'Show Debug Helper'}
        </button>
      </div>

      {showHelperPanel && (
        <div style={{ padding: '12px', backgroundColor: '#ebf8ff', borderRadius: '6px', border: '1px solid #bee3f8', fontSize: '13px', color: '#2b6cb0' }}>
          <strong>💡 Conditional Rendering Insight:</strong> This box is rendered using the logical <code>&&</code> short-circuit operator. The active section below is evaluated via <code>if-else</code> routing.
        </div>
      )}

      {/* --- 4. Ternary Operator (? :) Rendering Method --- */}
      <footer style={{ marginTop: '25px', textAlign: 'center', fontSize: '11px', color: '#a0aec0' }}>
        {selectedView === 'courses' 
          ? "Academic Curriculum Portal © 2026" 
          : "Knowledge Hub Publishers © 2026"
        }
      </footer>

    </div>
  );
}

export default App;