import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import AddBlogPage from './components/AddBlogPage';
import { PostsProvider } from './components/PostsContext';

function App() {
  return (
    <Router>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/add-blog" element={<AddBlogPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PostsProvider>
    </Router>
  );
}

export default App;