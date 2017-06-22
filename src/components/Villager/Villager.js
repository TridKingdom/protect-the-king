import React, {Component} from 'react';
import './Villager.css';

class Villager extends Component {
  kill () {
    alert(`Villager #${this.props.id} has been killed!`);
  }

  render () {
    return (
      <div className="villager" onClick={this.kill.bind(this)}>
        <span className="villager__number">V{this.props.id}</span>
      </div>
    );
  }
}

export default Villager;
