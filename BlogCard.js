import React from 'react';
import './BlogCard.css';

function BlogCard({ title, excerpt, onClick }) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <button onClick={onClick}>Read More</button>
    </div>
  );
}

export default BlogCard;
