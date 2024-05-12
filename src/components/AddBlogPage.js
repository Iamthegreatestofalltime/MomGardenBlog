import React, { useContext } from 'react';
import { PostsContext } from './PostsContext';
import AddBlog from './AddBlog';

const AddBlogPage = () => {
  const { addPost } = useContext(PostsContext);

  return (
    <div>
      <header style={{ backgroundColor: 'lightgreen', padding: '10px 0', textAlign: 'center' }}>
        <h1>Add New Blog Post</h1>
      </header>
      <AddBlog onAdd={addPost} />
    </div>
  );
};

export default AddBlogPage;