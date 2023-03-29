import './App.css';
import backgroundImage from '../src/images/backgroundimg.png';
import NavBar from '../src/components/NavBarComponent';





function App() {
  return (
    <div>
     <NavBar></NavBar>
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
