import './App.css';
import backgroundImage from '../src/images/backgroundimg.png'





function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <head>
        <nav>
          <image>Logo Here</image>
          <link>
          <a href='#Home'>Home</a>
          <a href='#GrowKit'>Grow Kit</a>
          <a href='#Blog'>Blog</a>
          <a href='#Contact'>Contact us</a>
          </link>
        </nav>
      </head>
      
    </div>
  );
}

export default App;
