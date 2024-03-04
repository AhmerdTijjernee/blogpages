import React, { useState, useEffect } from 'react';
import './ViewPost.css';
import { Link } from 'react-router-dom';

const ViewPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []); 

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:8000/post');
      const postData = await response.json();
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className='post-container'>
      <header className="head-section">
        <h1>Top trending news</h1>
      </header>

      <section className="section-container-post">
        {posts.map((post, index) => (
          <div className="view-post">
            <h2 key={index}>{post.title}</h2>
            <p key={index}>{post.body.slice(0, 200)}...</p>
            <Link to={`/details/${post.id}`}>ReadMore</Link>
          </div>          
        ))}
      </section>
    </div>
  );
};

export default ViewPost;
