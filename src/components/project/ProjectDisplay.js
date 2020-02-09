import React, { Component } from 'react';

export default class   ProjectDisplay extends Component {
  render() { 
    return ( 
      <div className="project-Display-Container">
        <img src={this.props.src} alt={this.props.alt} width="484" height="400"/>

        <div className="display-Buttons-Container">
          <a href={this.props.liveURL}
             className="display-Button-Live">
          Live Version</a>

          <a href={this.props.githubURL}
             className="display-Button-Github"
          >GitHub</a>
        </div>

      </div>
     );
  }
}