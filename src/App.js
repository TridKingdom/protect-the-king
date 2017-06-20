import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import Village from './components/Village/Village';
import Villager from './components/Villager/Villager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="TridKingdom" />
        </div>
        <div className="kings-landing">
          <Village villageName={'UK'}/>
          <Village villageName={'France'}/>
          <Village villageName={'Germany'}/>
          <Village villageName={'Italy'}/>
          <Village villageName={'Netherland'}/>
          <Village villageName={'Belgium'}/>
          <Village villageName={'Luxemberg'}/>
          <Village villageName={'Spain'}/>
        </div>
      </div>
    );
  }
}

export default App;
