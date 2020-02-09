import React, { Component } from 'react';
import js_logo from '../js_logo.png';
import node_logo from '../node_logo.png';
import react_logo from '../react_logo.png';
import Technology from './Technology';
import CSS3_logo from '../CSS3_logo.png';
import html_logo from '../html_logo.png';
import git_logo from '../git_logo.png';
import npm_logo from '../npm_logo.png';

export default class Technologies extends Component {
  render() { 
    return ( 
      <div>
        <div className="technologies-Text-Container">
          <h2 className="technologies-Header-Text">
            Here's some technologies I work with:
          </h2>
        </div>

        <div className="technologies-Container">
          <Technology src={html_logo} alt={'html logo'} text={'HTML5'} />
          <Technology src={CSS3_logo} alt={'CSS3 logo'} text={'CSS3'} />
          <Technology src={js_logo} alt={'js logo'} text={'JS/ES6'} />
          <Technology src={react_logo} alt={'react logo'} text={'React'} />
          <Technology src={node_logo} alt={'node logo'} text={'Node/Express.js'} />
          <Technology src={git_logo} alt={'git logo'} text={'Git'} />
          <Technology src={npm_logo} alt={'npm logo'} text={'npm'} /> 
        </div>
      </div>
     );  
  }
}