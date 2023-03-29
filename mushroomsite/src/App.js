import './App.css';
import backgroundImage from '../src/images/backgroundimg.png'





function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <head>
        <nav>
          <image>Logo Here</image>
          <link>
          <a href='#'>Home</a>
          <a href='#'>Grow Kit</a>
          <a href='#'>blog</a>
          <a href='#'>Contact us</a>
          </link>
        </nav>
      </head>
      
    </div>
  );
}

export default App;
