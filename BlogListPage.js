import React from 'react';
import { Link } from 'react-router-dom';
import './BlogListPage.css';

function BlogListPage() {
  const blogs = [
    { id: 1, title: 'First Blog', excerpt: 'This is the first blog excerpt.' },
    { id: 2, title: 'Second Blog', excerpt: 'This is the second blog excerpt.' },
    { id: 3, title: 'Third Blog', excerpt: 'This is the third blog excerpt.' },
  ];

  return (
    <div className="blog-list-container">
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <Link to={`/blogs/${blog.id}`}>Read More</Link>
        </div>
      ))}
      <Link to="/blogs/create">
        <button>Create New Blog</button>
      </Link>
    </div>
  );
}

export default BlogListPage;
