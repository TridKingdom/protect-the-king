import React, { Component } from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="TridKingdom" />
        </div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">奇德王國</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}><Link to="villages">Villages</Link></NavItem>
            <NavItem eventKey={2}><Link to="scores">Scores</Link></NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
