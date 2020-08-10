import React, { Component } from "react";
import js_logo from "../js_logo.png";
import node_logo from "../node_logo.png";
import react_logo from "../react_logo.png";
import Technology from "./Technology";
import scss_logo from "../scss_logo.png";
import html_logo from "../html_logo.png";
import git_logo from "../git_logo.png";
import yarn_logo from "../yarn_logo.png";

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
          <Technology src={html_logo} alt={"html logo"} text={"HTML5"} />
          <Technology src={scss_logo} alt={"SCSS logo"} text={"SCSS"} />
          <Technology src={js_logo} alt={"js logo"} text={"JS/ES6"} />
          <Technology src={react_logo} alt={"react logo"} text={"React"} />
          <Technology
            src={node_logo}
            alt={"node logo"}
            text={"Node/Express.js"}
          />
          <Technology src={git_logo} alt={"git logo"} text={"Git"} />
          <Technology src={yarn_logo} alt={"yarn logo"} text={"Yarn"} />
        </div>
      </div>
    );
  }
}
