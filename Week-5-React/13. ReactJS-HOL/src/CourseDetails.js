import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 'course-1', title: 'Full Stack React & Node Masterclass', duration: '12 Weeks', level: 'Intermediate' },
    { id: 'course-2', title: 'Introduction to Modern Javascript ES6', duration: '3 Weeks', level: 'Beginner' },
    { id: 'course-3', title: 'System Architecture Fundamentals', duration: '8 Weeks', level: 'Advanced' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#ebfbf2', borderRadius: '8px', border: '1px solid #c6f6d5' }}>
      <h3 style={{ color: '#2f855a', marginTop: 0 }}>🎓 Training Courses</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {courses.map((course) => (
          <div key={course.id} style={{ padding: '10px', background: '#fff', borderLeft: '4px solid #2f855a', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{course.title}</h4>
            <p style={{ margin: '0', fontSize: '13px', color: '#555' }}>
              Duration: <strong>{course.duration}</strong> | Difficulty: <strong>{course.level}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;