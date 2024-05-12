import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addBlogStyles.css'; // Reference an external stylesheet

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [enhancedDescription, setEnhancedDescription] = useState('');
  const navigate = useNavigate();

  const handleEnhanceClick = async () => {
    if (!description) {
      alert('Please enter some initial thoughts to enhance.');
      return;
    }
    try {
      const response = await axios.post('https://backend-br5qqmj7wq-uc.a.run.app/api/enhance-post', { text: description });
      setEnhancedDescription(response.data.enhancedText);
    } catch (error) {
      console.error('Failed to enhance description:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-br5qqmj7wq-uc.a.run.app/api/blogposts', {
        title,
        imageUrl,
        description: enhancedDescription || description
      });
      navigate('/');
    } catch (error) {
      console.error('Failed to add blog post:', error);
    }
  };

  return (
    <div className="add-blog-container">
      <h1 className="add-blog-title">Add New Blog Post</h1>
      <form onSubmit={handleSubmit} className="add-blog-form">
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="textarea-field"
          />
          <button
            type="button"
            onClick={handleEnhanceClick}
            className="enhance-button"
          >
            Enhance Description
          </button>
        </div>
        {enhancedDescription && (
          <div className="form-field">
            <label htmlFor="enhancedDescription">Enhanced Description:</label>
            <textarea
              id="enhancedDescription"
              value={enhancedDescription}
              onChange={(e) => setEnhancedDescription(e.target.value)}
              required
              className="textarea-field"
            />
          </div>
        )}
        <button type="submit" className="submit-button">Add Blog Post</button>
      </form>
    </div>
  );
};

export default AddBlog;