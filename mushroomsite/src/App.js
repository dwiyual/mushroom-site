import React from 'react';
import './App.css';
import NavBar from './components/NavBarComponent';
import Tagline from './components/TagLineComponent';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Shop from './pages/shop';
import GrowKit from './pages/growkit';
import Blog from './pages/blog';
import Contact from './pages/contact';




function App() {
  return (
    <div>
      <NavBar>
      </NavBar>
      <Router>
        <Route path="/shop" element= {<Shop />}></Route>
        <Route path="/growkit" element={<GrowKit />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Router>
      <div className="App">
        <header>
          <Tagline>
          </Tagline>
        </header>
        <footer>
        </footer>
      </div>
    </div>
  );
}

export default App;