import React, { Component } from 'react';
import './VillagesPage.css';
import Village from '../../components/Village/Village';

class VillagesPage extends Component {
  render() {
    return (
      <div className="VillagesPage">
       <h2>VillagesPage</h2>
        <div className="kings-landing clearfix">
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

export default VillagesPage;
