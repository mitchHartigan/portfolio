import React, { Component } from 'react';

export default class BulletPoint extends Component {
  render() { 
    return ( 
      <div>
        <ul>
          <li>{this.props.text}</li>
        </ul>
      </div>
     );
  }
}
