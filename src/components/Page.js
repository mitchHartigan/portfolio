import React, { Component } from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import CheckMeOut from "./CheckMeOut";
import Technologies from "./Technologies";
import Services from "./Services";
import PageTitle from "./PageTitle";
import Project from "./project/Project";
import scriber_display from "../scriber_display.png";
import singapore_display from "../singapore_display.png";
import spook_calendar_display from "../spook_calendar_display.png";
import pakkit_display from "../Pakkit_thumbnail.PNG";
import Experience from "./Experience";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

export default class Page extends Component {
  render() {
    return (
      <div>
        <div id="top">
          <Header />
        </div>
        <div className="page-Div">
          <Greeting />
          <CheckMeOut />
        </div>
        <div className="page-Div black-Background">
          <Technologies />
          <Services />
        </div>

        <div>
          <Testimonial />
        </div>

        <div id="my-work">
          <PageTitle textStyle="pageTitle-Header-Text">My Projects</PageTitle>

          <Project
            projectTitle={"Scriber"}
            projectTitleStyle={"project-Title-Text"}
            displayImg={scriber_display}
            displayImgAlt={"scriber app display image"}
            liveURL={"https://scriber.design/"}
            githubURL={"https://github.com/mitchHartigan/scriber-frontend"}
            techBulletPointsCol1={[
              "React.js",
              "Node/Express.js",
              "JSON Web Tokens",
            ]}
            techBulletPointsCol2={[
              "MongoDB",
              "Git/GitHub",
              "Heroku/Netlify Deployment",
            ]}
            projectDescription={`Scriber is a minimalist notetaking app that I built
                                    to learn how to create persistent data communication to a RESTful
                                    API, and to deploy the MERN stack. It lets users create and drag notes
                                    around a canvas, where the position and content of each note is
                                    automatically synced to their account.`}
            challengesDescription={`While building this app, I was challenged to really apply and expand
                                    my web development skillset. I learned how authentication works, how to structure
                                    React projects for maximum maintainability, and the inner workings of getting
                                    the MERN stack up and running on a hosting service. Scriber has proved not only to be an excellent
                                    learning opportunity, but a project I've continually revisited to refactor
                                    and improve.`}
            featureBulletPoints={[
              "JWT Authentication",
              "User Account Creation",
              "Continual Data Sync",
              "Password Encryption",
              "REST API Backend",
              "Hosted MongoLab Database",
              "Token persistence through localStorage",
            ]}
          />
          <Project
            projectTitle={"Singapore: Farm to Finance"}
            projectTitleStyle={"project-Title-Text"}
            displayImg={singapore_display}
            displayImgAlt={"Farm to finance in singapore display image"}
            liveURL={"https://mitchhartigan.github.io/d3-visualization/"}
            githubURL={"https://github.com/mitchHartigan/d3-visualization"}
            techBulletPointsCol1={["D3.js", "HTML5", "CSS3"]}
            techBulletPointsCol2={["JSON", "jQuery", "Git/GitHub"]}
            projectDescription={`This project was part of a university assignment to create a web-based data visualization using
                                 D3.js. It visualizes Singapores rapid shift from a farming economy to a financial services based
                                 economy. The site is interactive, and lets the user make selections as to which data they'd like
                                 to see displayed.`}
            challengesDescription={`Specifically, this project served as a great opportunity to learn the inner working of D3.js, as well
                                    as some more advanced techniques for gathering and parsing large sources of data from the internet.
                                    I also learned a selection of jQuery techniques for animating and
                                    dynamically displaying certain elements, which proved rather useful in the context of this project
                                    and for my development skillset as a whole.
                                    `}
            featureBulletPoints={[
              "jQuery Animations",
              "Multi-Layer Line Visualization",
              "Treemap Visualization",
              "Large Object Parsing",
            ]}
          />
          <Project
            projectTitle={"Spook Calendar"}
            projectTitleStyle={"project-Title-Text"}
            displayImg={spook_calendar_display}
            liveURL={"https://mitchhartigan.github.io/spook-calendar/"}
            githubURL={"https://github.com/mitchHartigan/spook-calendar/"}
            techBulletPointsCol1={["HTML5", "JS"]}
            techBulletPointsCol2={["CSS3", "Git/GitHub"]}
            projectDescription={`This website acts as a year calendar relative to October, where it is assumed that all other months don't
                                exist and therefore it is always time to be spooky. Originally based off of a meme conveying the same message, the
                                Spook Calendar was created as a one-day challenge/hackathon build.`}
            challengesDescription={`As is likely true with many projects created hastily during hackathons, I failed to truly think through all of the different
                                    conditions and outcomes that would be caused by the range of different dates throught the year. Spook Calendar taught me on a small scale
                                    the long-running implications of hacky code and overconfidence, and changed my mindset towards approaching even seemingly simple development problems.
                                  `}
            featureBulletPoints={[
              "JS Date Formatting",
              "JS String Manipulation",
              "Responsive Design",
              "CSS Animations",
            ]}
          />
          <Project
            projectTitle="Pakkit"
            projectTitleStyle="project-Title-Text"
            displayImg={pakkit_display}
            liveURL="https://pakkit.netlify.app/"
            githubURL="https://github.com/mitchHartigan/pakkit/"
            techBulletPointsCol1={[
              "JS",
              "React Beautiful DnD",
              "Styled Components",
              "PropTypes",
            ]}
            techBulletPointsCol2={[
              "React Router",
              "Treemap Data Visualization",
              "Persistent Data through localstorage",
            ]}
            projectDescription={`One of my favorite hobbies is backpacking, and less weight on your back always leads to a more enjoyable trip.
                                However, deciding what gear to bring and what to leave behind is often a difficult process full of trade-offs. Pakkit is a web-based data visualization tool
                                that I designed to help make these decisions easier. It allows users to enter the weight of each item in their pack,
                                creating and displaying a visual representation of their backpacking gear and its weight.`}
            challengesDescription={`This project was a great opportunity for me to draw on both my design and development skills, in creating a product designed to be useful,
                                    useable, and performant. I created several different UI prototypes in Figma, user tested them with backpacker friends, and used their feedback to 
                                    iterate on and improve the user experience. Translating that into a performant front-end React application proved challenging but extremely rewarding,
                                    especially with regard to parsing and displaying the live data, and in managing the overall size and scope of the application itself.
                                    `}
            featureBulletPoints={[""]}
          />
        </div>
        <div id="my-experience" className="page-Div">
          <Experience />
        </div>
        <div id="contact" className="page-Div black-Background">
          <Contact />
        </div>
      </div>
    );
  }
}
