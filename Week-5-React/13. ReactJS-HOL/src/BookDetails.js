import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 'book-1', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', category: 'Programming' },
    { id: 'book-2', title: 'You Don\'t Know JS', author: 'Kyle Simpson', category: 'Advanced JS' },
    { id: 'book-3', title: 'Clean Code', author: 'Robert C. Martin', category: 'Software Design' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#fff8f0', borderRadius: '8px', border: '1px solid #f3d9b1' }}>
      <h3 style={{ color: '#e67e22', marginTop: 0 }}>📚 Book Catalog</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {books.map((book) => (
          // Extracting list items using unique id as keys
          <div key={book.id} style={{ padding: '10px', background: '#fff', borderLeft: '4px solid #e67e22', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{book.title}</h4>
            <p style={{ margin: '0', fontSize: '13px', color: '#555' }}>
              By <strong>{book.author}</strong> | Tag: <em>{book.category}</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;