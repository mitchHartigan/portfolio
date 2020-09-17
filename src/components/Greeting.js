import React, { Component } from "react";
import Particles from "./Canvas";

export default class Greeting extends Component {
  render() {
    return (
      <div className="greeting-Container">
        <h1 className="greeting-Hero-Text">Hey! I'm Mitch.</h1>
        <h2 className="greeting-Sub-Text">
          I'm a frontend developer, and I like building stuff for the web.
        </h2>
      </div>
    );
  }
}
