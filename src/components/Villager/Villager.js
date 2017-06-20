import React, {Component} from 'react';
import './Villager.css';

class Villager extends Component {
  kill () {
    alert(`Villager #${this.props.number} has been killed!`);
  }

  render () {
    return (
      <div className="villager" onClick={this.kill.bind(this)}>
        <span className="villager__number">V{this.props.number}</span>
      </div>
    );
  }
}

export default Villager;
