import React from 'react';
import Canvas from './components/Canvas.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1 class='header'>two_days_post_ //</h1>
        </header>
        <input class='slider' type="range" min="1" max="10000" value="10000"/>
        <p id="the_value"></p>
        <Canvas />
      </body>
    </div>
  );
}

export default App;
