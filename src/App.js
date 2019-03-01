import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
                <h1>Header</h1>
            </header>
            <Routes />
          </div>
        </Router>
    );
  }
}

export default App;
