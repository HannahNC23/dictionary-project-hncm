import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="#" className="btn btn-primary">
            Search
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Hannah Nicole Charles-Murphy
        </footer>
      </div>
    </div>
  );
}

export default App;
