import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Component } from './Component';
import { SomeComponent } from './plugins/pluginsConstants';

import container from './core/corePlugin';
//import container from './extentions/extensionPlugin';

const PluggedComponent = container.resolve(SomeComponent);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Component container={container} />
                <PluggedComponent />
            </header>
        </div>
    );
}

export default App;
