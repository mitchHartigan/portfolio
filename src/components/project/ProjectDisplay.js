import React, { Component } from 'react';

export default class   ProjectDisplay extends Component {
  render() { 
    return ( 
      <div className="project-Display-Container">
        <div className="display-Img-Container">
          <img className="display-Img" src={this.props.src} alt={this.props.alt}/>
        </div>

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