import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 'blog-1', title: 'Demystifying React Fiber Architecture', author: 'Sarah Connor', reads: '1.2k' },
    { id: 'blog-2', title: 'Why CSS Modules are Better Than Inline Styles', author: 'John Doe', reads: '950' },
    { id: 'blog-3', title: 'Understanding ES6 Destructuring Tricks', author: 'Jane Smith', reads: '2.1k' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#eef8ff', borderRadius: '8px', border: '1px solid #bee3f8' }}>
      <h3 style={{ color: '#2b6cb0', marginTop: 0 }}>✍️ Latest Blog Articles</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ padding: '10px', background: '#fff', borderLeft: '4px solid #2b6cb0', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{blog.title}</h4>
            <p style={{ margin: '0', fontSize: '13px', color: '#555' }}>
              Written by <strong>{blog.author}</strong> | 📈 {blog.reads} views
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;