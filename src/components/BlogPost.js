import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from './PostsContext';

const BlogPost = () => {
    const { posts } = useContext(PostsContext);
    const { id } = useParams();  // id is a string
    const post = posts.find(p => p._id.toString() === id);

    if (!post) {
      return <p>Post not found!</p>;
    }
    
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <img
            src={post.imageUrl}
            alt={post.title}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginRight: '2rem'
            }}
          />
          <h1 style={{
            fontSize: '2.5rem',
            color: '#4d7c0f',
            margin: 0
          }}>
            {post.title}
          </h1>
        </div>
        <div>
          <p style={{
            lineHeight: 1.6,
            fontSize: '1.1rem',
            color: '#333'
          }}>
            {post.description}
          </p>
        </div>
      </div>
    );
}

export default BlogPost;