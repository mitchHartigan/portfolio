import React, { Component } from 'react';

export default class ProjectDescription extends Component {
  render() { 
    return ( 
      <div className="description-Text-Container">
        <p className="project-Description-Text">
          {this.props.children}
        </p>
      </div>
     );
  }
}