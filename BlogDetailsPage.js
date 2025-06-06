import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDetailsPage.css';

function BlogDetailsPage() {
  const blog = {
    title: 'Sample Blog',
    content: 'This is the detailed content of the blog.',
    author: 'Author Name',
    date: 'May 28, 2025',
  };

  return (
    <div className="blog-details-container">
      <h1>{blog.title}</h1>
      <p>By {blog.author} on {blog.date}</p>
      <p>{blog.content}</p>
      <Link to="/blogs">Back to Blog List</Link>
    </div>
  );
}

export default BlogDetailsPage;
