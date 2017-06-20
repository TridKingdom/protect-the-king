import React, {Component} from 'react';
import './Village.css';

import Villager from '../Villager/Villager';

class Village extends Component {
  static defaultProps = {
    villageName: 'Village',
    villagers: [1, 2, 3, 4, 5, 6],
  }

  render () {

    const villagers = this.props.villagers.map((villagerNo) => {
      return (
        <li className="village__house">
          <Villager number={villagerNo} />
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
