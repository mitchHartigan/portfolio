import React, { Component } from 'react';

export default class Technology extends Component {
  render() { 
    return ( 
      <div className="technology-Img-Wrapper">
        <img src={this.props.src} alt={this.props.alt} width="100" height="100"/>
        <p className="technology-Text">{this.props.text}</p>
      </div>
     );
  }
}