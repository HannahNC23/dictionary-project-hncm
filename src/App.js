import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to my dictionary</header>
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
