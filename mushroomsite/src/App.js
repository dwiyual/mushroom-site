import React from 'react';
import './App.css';
import NavBar from './components/NavBarComponent';
import Tagline from './components/TagLineComponent';
import ShopItem from './components/ShopItemComponent';




function App() {
  return (
    <div>
     <NavBar>
     </NavBar>
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