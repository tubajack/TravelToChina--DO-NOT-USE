import React from 'react';
import Title from "./title/Title.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <header className="App-header">
        <p>
          Welcome to China. 
        </p>

        <img id = "China" src = "images/chinamap.jpg" alt = "China"/>
  
      </header>
    </div>
  );
}

export default App;
