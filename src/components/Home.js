import React, { useContext } from 'react';
import { PostsContext } from './PostsContext';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; // Ensure to include your styles here

const Home = () => {
  const { posts } = useContext(PostsContext);
  const navigate = useNavigate();

  const plants = [
    { name: 'Pepper', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.FS8SufdcjYSbCXeQVpd1nQHaFj&pid=Api&P=0&h=220' },
    { name: 'Cucumber', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.wcQN84nockdjwcxSZJmYXgHaHa&pid=Api&P=0&h=220' },
    { name: 'Tomato', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.xSDJVwIihtSTVVzxOklX2AHaEK&pid=Api&P=0&h=220' },
    { name: 'Dill', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.vZ-d5dtKeN1AYML73F1CBwHaFj&pid=Api&P=0&h=220' },
    { name: 'Basil', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.RXcJ-dKkClAIglZFvzIXWwHaFj&pid=Api&P=0&h=220' },
    { name: 'Jalapeno', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.rrqELCayj29qpsffeFWWnwHaFj&pid=Api&P=0&h=220' },
    { name: 'Flowers', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.0k0cuS1WQKeJxXFxVwrjVAHaHa&pid=Api&P=0&h=220' },
    { name: 'Strawberries', imageUrl: 'https://images.immediate.co.uk/volatile/sites/10/2018/02/30c08afd-f1b0-4156-a310-08c4152db14d-35f46da.jpg?quality=90&lb=620,413&background=white' },
    { name: 'Cherry Tomatoes', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.UND7H6WbNREhhcPoOsQnmAHaHa&pid=Api&P=0&h=220' }
  ];

  const handleAddBlogClick = () => {
    navigate('/add-blog');
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <h1 className="blog-title">Mom's Gardening Blog</h1>
          <button className="add-blog-button" onClick={handleAddBlogClick}>Add Blog</button>
        </div>
      </header>

      <div className="hero-image">
        <img src="https://i.imgur.com/SNJCBx0.jpeg" alt="Main Garden" />
      </div>

      <main className="posts-container">
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id} className="post-link">
            <div className="post-card">
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
              </div>
              <div className="post-image-container">
                <img src={post.imageUrl} alt={post.title} className="post-image" />
              </div>
            </div>
          </Link>
        ))}
      </main>
      <section className="plant-section">
        <h2 className="section-title">What Are We Growing?</h2>
        <div className="plant-grid">
          {plants.map((plant, index) => (
            <div key={index} className="plant-card">
              <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
              <h3 className="plant-name">{plant.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;