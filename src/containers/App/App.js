import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="TridKingdom" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="villages">Villages</Link>
            <Link to="scores">Scores</Link>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
