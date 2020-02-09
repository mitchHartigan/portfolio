import React, { Component } from 'react';

export default class Title extends Component {
  render() { 
    return ( 
      <div className={this.props.textStyle}>
        <h4>{this.props.children}</h4>
      </div>
     );
  }
}
