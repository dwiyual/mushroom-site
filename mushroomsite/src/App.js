import React from 'react';
import './index.css';
import './App.css';
//import NavBar from './components/NavBarComponent';
import Tagline from './components/TagLineComponent';
import { Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop';
import GrowKit from './pages/growkit';
import Blog from './pages/blog';
import Contact from './pages/contact';

export function App() {
  return (
    <>
      <div className="App">
        <nav id="NavBar" style={{
          backgroundImage: `gradient(to right, hex#60362a, hex#1c1718)`,
          alignItems: `center`,
          justifyContent: `center`, }}>

          <div id="NavLinks" style={{
            display: `flex`,
            justifyContent: `flex-end`,
            alignItems: `center`,
            textDecoration: `none`,
            textDecorationColor: `white`,
            textDecorationLine: `none`,
            margin: `0 2rem 0 36rem`, }}>

            <Link to="/">
              <li className='navlink'>Home</li>
            </Link>
            <Link to="/shop">
              <li className='navlink'>Shop</li>
            </Link>
            <Link to="/growkit">
              <li className='navlink'>Grow Kit</li>
            </Link>
            <Link to="/blog">
              <li className='navlink'>Blog</li>
            </Link>
            <Link to="/contact">
              <li className='navlink'>Contact</li>
            </Link>
          </div>
          <label>
            <input type="text" name="search" /> Search
          </label>
        </nav>
        <header className="App-header">
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/growkit" element={<GrowKit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </>
  );
}


export class Home
  extends React.Component {
  render() {
    return (
      <>
        <div className="Home">
          <header>
            <Tagline />
          </header>
          <footer>

          </footer>
        </div>
      </>

    );
  }
}

export default App;
