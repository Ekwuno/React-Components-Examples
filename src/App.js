import logo from './logo.svg';
import './App.css';
import Clock from './Components/time';
import OptionalGreeting from './Components/optionalGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <OptionalGreeting/>
          Learn React
          <Clock/>
      
      </header>

      

    </div>
  );
}

export default App;
