import React, { Component } from 'react';
import Header from './Header';
import Greeting from './Greeting';
import CheckMeOut from './CheckMeOut';
import Technologies from './Technologies';
import Services from './Services';
import MyWork from './MyWork';
import Project from './project/Project'
import scriber_display from '../scriber_display.png'

export default class Page extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="page-Div">
          <Greeting />
          <CheckMeOut />
        </div>
        <div className="page-Div black-Background">
          <Technologies />
          <Services />
        </div>
        <div className="page-Div">
          <MyWork />
          
          <Project
            projectTitle={'Scriber'}
            projectTitleStyle={'project-Title-Text'}
            displayImg={scriber_display}
            displayImgAlt={'scriber app display image'}
            techBulletPointsCol1={[
                                    'React.js',
                                    'Node/Express.js',
                                    'JSON Web Tokens',
                              ]}
            techBulletPointsCol2= {[
                                    'MongoDB',
                                    'Git/GitHub',
                                    'Heroku/Netlify Deployment',
                              ]}
            projectDescription={
                                    `Scriber is a minimalist notetaking app that I built
                                    to learn how to create persistent data communication to a RESTful
                                    API, and to deploy the MERN stack. It lets users create and drag notes
                                    around a canvas, where the position and content of each note is
                                    automatically synced to their account.`}
            challengesDescription={
                                    `While building this app, I was forced to really apply and expand
                                    my web development skillset. I learned how authentication works, how to structure
                                    React projects for maximum maintainability, and the inner workings of getting
                                    the MERN stack up and running on a hosting service. Scriber has proved not only to be an excellent
                                    learning opportunity, but a project I've continually revisited to refactor
                                    and improve.`
                                  }
            featureBulletPoints={['JWT Authentication',
                                  'User Account Creation',
                                  'Continual Data Sync',
                                  'Password Encryption',
                                  'REST API Backend',
                                  'Hosted MongoLab Database',
                                  'Token persistence through localStorage',
                                 ]}
          />
        </div>
      </div>
     );
  }
}