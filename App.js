import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogListPage from './pages/BlogListPage';
import BlogCreatePage from './pages/BlogCreatePage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/create" element={<BlogCreatePage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
