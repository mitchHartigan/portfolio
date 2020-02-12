import React, { Component } from 'react';
import Title from './Title';
import ProjectDisplay from './ProjectDisplay';
import BulletedList from './BulletedList';
import Description from './Description';

export default class Project extends Component {
  render() { 
    return (
      <div className="project-Container-Parent">

        <div className="project-Container">

          <Title textStyle={'project-Title-Text'}>{this.props.projectTitle}</Title>
          <div className="project-Content-Container">
            <div className="project-Display-Container-Parent">
              <ProjectDisplay
              src={this.props.displayImg} 
              alt={this.props.displayImgAlt}
              liveUrl={'https://www.youtube.com/'}
              gitHubUrl={''}
              />
              <Title textStyle={'technologies-Title-Text'}>Technologies used:</Title>
              <div className="bulletPoint-Container">
                <BulletedList bulletPoints={this.props.techBulletPointsCol1} />
                <BulletedList bulletPoints={this.props.techBulletPointsCol2} />
              </div>
              
            </div>
            
            <div className="project-Description-Container">
              <Description>{this.props.projectDescription}</Description>

              <Title textStyle={'project-Title-SubText'}>What I learned:</Title>
              <Description>{this.props.challengesDescription}</Description>

              <Title textStyle={'project-Title-SubText'}>Notable Features</Title>
              <BulletedList bulletPoints={this.props.featureBulletPoints}/>
            </div>
          </div>

        </div>

      </div>
     );
  }
}
