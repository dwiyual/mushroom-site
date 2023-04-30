import React from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBarComponent';
import Tagline from './components/TagLineComponent';
//import { Outlet } from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import GrowKit from './pages/growkit';
import Blog from './pages/blog';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
        <NavBar />
        <header>
          <Tagline />
        </header>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/growkit" element={<GrowKit />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer />
    </div>
  );
}

export default App;
