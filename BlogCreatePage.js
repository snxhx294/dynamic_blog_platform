import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlogCreatePage.css';

function BlogCreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the uploaded image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);

    if (image) {
      formData.append('image', image); // Append the image file
    }

    try {
      await axios.post('/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set header for file upload
        },
      });
      alert('Blog Created Successfully!');
      navigate('/blogs'); // Redirect to blog list page
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="blog-create-container">
      <h1>Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/blogs')}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default BlogCreatePage;
