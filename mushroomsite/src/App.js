import './App.css';
import backgroundImage from '../src/images/backgroundimg.png'





function App() {
  return (
    <div>
      <nav>
        <image>Logo Here</image>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#GrowKit'>Grow Kit</a></li>
        <li><a href='#Blog'>Blog</a></li>
        <li><a href='#Contact'>Contact us</a></li>
      </nav>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <head>
          <div>
            <p>Hello World</p>
          </div>
        </head>

      </div>
    </div>
  );
}

export default App;
