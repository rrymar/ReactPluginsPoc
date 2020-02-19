import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Component } from './Component';
//import container from './core/corePlugin';
import container from './extentions/extensionPlugin';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Component container={container}/>    
      </header>
    </div>
  );
}

export default App;
