import React, { Component } from 'react';
import PageTitle from './PageTitle';
import Resume from '../MitchellHartigan.pdf';

export default class Experience extends Component {
  render() { 
    return ( 
      <div className="my-Experience-Div">
        <PageTitle textStyle="experience-Header-Text">My Experience</PageTitle>
          <h2 className="experience-Sub-Text">I could tell you all about it here...but how about a link to my <a target="_blank" className="experience-Link" href={Resume}>resume</a> instead?
          </h2>
      </div>
     );
  }
}
 