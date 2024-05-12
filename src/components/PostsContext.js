import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://backend-br5qqmj7wq-uc.a.run.app/api/blogposts');
            console.log(response.data); // Check the structure of the fetched data
            setPosts(response.data);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    };

    fetchPosts();
}, []);

  const addPost = (post) => {
    setPosts([...posts, post]); // This might need updating based on how you handle IDs
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};