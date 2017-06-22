import React, {Component} from 'react';
import './Village.css';

import Villager from '../Villager/Villager';

class Village extends Component {
  static defaultProps = {
    villageName: 'Village',
    villagers: [
      {id: 1, isDead: false},
      {id: 2, isDead: false},
      {id: 3, isDead: false},
      {id: 4, isDead: false},
      {id: 5, isDead: false},
      {id: 6, isDead: false},
    ],
  }

  render () {
    const villagers = this.props.villagers.map((villager) => {
      return (
        <li className="village__house" key={villager.id}>
          <Villager id={villager.id} />
        </li>
      );
    });

    return (
      <div className="village">
        <h3 className="village__sign">{this.props.villageName}</h3>
        <ul className="village__ground">
          {villagers}
        </ul>
      </div>
    );
  }
}

export default Village;
