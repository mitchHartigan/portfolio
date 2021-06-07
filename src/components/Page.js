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
import pakkit_display from "../Pakkit_thumbnail.PNG";
import bigwave_display from "../BigWavePortfolioSnip.PNG";
import dron_display from "../dron_concept_img.PNG";
import Experience from "./Experience";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Particles from "./Canvas";

export default class Page extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            zIndex: "-1",
            background: "#222",
            top: "0",
            left: "0",
            right: "0px",
          }}
        >
          <Particles />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          <div id="top">
            <Header />
          </div>
          <Greeting />
          <CheckMeOut />
        </div>
        <div className="page-Div black-Background">
          <Technologies />
          <Services />
        </div>

        <Testimonial />

        <div id="my-work">
          <PageTitle textStyle="pageTitle-Header-Text">My Work</PageTitle>

          <Project
            projectTitle="Big Wave Water"
            projectTitleStyle="project-Title-Text"
            displayImg={bigwave_display}
            liveURL="https://bigwavewater.netlify.app/"
            githubURL="https://github.com/mitchHartigan/big-wave/"
            techBulletPointsCol1={[
              "React.js",
              "Styled Components",
              "Lottie.js",
            ]}
            techBulletPointsCol2={[
              "React Router",
              "Serverless Functions",
              "Node.js",
            ]}
            projectDescription={`The aim of this project was to modernize the web presence for Big Wave Water Technologies, a municipal water treatment company in Oceanside, CA. I designed and built the new company website, exceeding the clients expectations with the overall look and feel of the final product. This site features animated product elements, modern card design, and a functional contact form pointing new customers in the right direction.`}
            challengesDescription={`Coming into this project with a set of design and development skills, I focused on growing in client interaction and communication. I took care to manage scope and client expectations, communicate technical topics in a non-technical way, and translate their wants and needs into a tangible outcome through my designs. 
                                    `}
            featureBulletPoints={[
              "On scroll animated SVG elements.",
              "Responsive across modern browsers and devices.",
              "Contact form connected to Node.js backend.",
              "Optimized page load times.",
            ]}
          />

          <Project
            projectTitle="Pakkit"
            projectTitleStyle="project-Title-Text"
            displayImg={pakkit_display}
            liveURL="https://pakkit.netlify.app/"
            githubURL="https://github.com/mitchHartigan/pakkit/"
            techBulletPointsCol1={[
              "React.js",
              "Styled Components",
              "PropTypes",
            ]}
            techBulletPointsCol2={[
              "React Router",
              "Git/Github",
              "Netlify Deployment",
            ]}
            projectDescription={`One of my favorite hobbies is backpacking, and having to carry less weight always leads to a more enjoyable trip.
                                However, deciding what backpacking gear to bring and what to leave behind is often a difficult process full of trade-offs. Pakkit is a web-based data visualization tool
                                that I designed to help make these decisions easier. It allows users to enter the weight of each item in their pack,
                                creating and displaying a visual representation of their backpacking gear.`}
            challengesDescription={`This project was a great opportunity for me to draw on both my design and development skills, in creating a product designed to be useful,
                                    useable, and performant. I created several different UI prototypes in Figma, user tested them with backpacker friends, and used their feedback to 
                                    iterate on and improve the user experience. Translating that into a functional front-end React application proved challenging but extremely rewarding,
                                    especially with regard to parsing and displaying the live data, and in managing the overall size and scope of the application itself.
                                    `}
            featureBulletPoints={[
              "Dynamic treemap data visualization",
              "Drag and drop list elements",
              "Programmatic graph color scheme",
              "'Single source of truth' shared by list and visualization components",
            ]}
          />
          <Project
            projectTitle={"Drön"}
            projectTitleStyle={"project-Title-Text"}
            displayImg={dron_display}
            displayImgAlt={"dron app display image"}
            liveURL={"https://mitchhartigan.github.io/dron-concept/"}
            githubURL={"https://github.com/mitchHartigan/dron-concept/"}
            techBulletPointsCol1={["Invision Studio", "Figma", "Bootstrap"]}
            techBulletPointsCol2={["Vanilla JS", "HTML", "CSS"]}
            projectDescription={`Drön is a mobile application designed to facilitate a future peer-to-peer drone delivery network. This product only exists
                                 in prototype form, as the technology required for such an app is still only conceptual. It would theoretically allow users to deliver a package or item to another user by requesting a delivery drone to their location for a pickup. I created and
                                  published a website to display my research and design process, as well as a web version of the interactive prototype.`}
            challengesDescription={`Even while completely placing aside technical challenges and working only on design, creating Drön proved to be highly challenging. The elements of 
                                    safety, system feedback, and conceptualizing the delivery process required a deep understanding of our potential users needs and concerns. Delivery drones are still an emerging
                                    technology, and designing a system that would cater to cautious new users and make them feel comfortable challenged me to significantly up my skills as a researcher and interface designer.`}
            featureBulletPoints={[
              "Functional interactive prototype",
              "Explanation of challenges faced",
              "Product demonstration video",
            ]}
          />
          <Project
            projectTitle={"Scriber"}
            projectTitleStyle={"project-Title-Text"}
            displayImg={scriber_display}
            displayImgAlt={"scriber app display image"}
            githubURL={"https://github.com/mitchHartigan/scriber-frontend"}
            liveURL={"https://scriber.netlify.app/"}
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
