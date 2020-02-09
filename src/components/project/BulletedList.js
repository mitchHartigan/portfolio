import React, { Component } from 'react';
import Title from './Title';
import BulletPoint from './BulletPoint';

export default class BulletedList extends Component {

  eachPoint = (text) => {
    return (
      <BulletPoint text={text} />
    );
  }

  render() { 
    return ( 
      <div>
        <div>{this.props.bulletPoints.map(this.eachPoint)}</div>
      </div>
     );
  }
}
 