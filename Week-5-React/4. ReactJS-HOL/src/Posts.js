import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    // Step 5: Initialize the state with an empty list of posts
    this.state = {
      posts: []
    };
  }

  // Step 6: Fetch API method to load posts
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assign the fetched data to the component state
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }

  // Step 7: Implement componentDidMount hook to call loadPosts()
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Implement componentDidCatch hook to display errors as alerts
  componentDidCatch(error, info) {
    alert(`Error occurred in component: ${error.message}`);
    console.error('Component Error Info:', info);
  }

  // Step 8: Implement render method to display the posts
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h2>Latest Blog Posts</h2>
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.map((post) => (
            <div key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '10px 0', paddingBottom: '10px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;