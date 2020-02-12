import React, { Component } from 'react';

export default class Technology extends Component {
  render() { 
    return ( 
      <div className="technology-Img-Wrapper">
        <img className="technology-Img" src={this.props.src} alt={this.props.alt}/>
        <p className="technology-Text">{this.props.text}</p>
      </div>
     );
  }
}