import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    return (
      <div className="greeting-Container">
        <h1 className="greeting-Hero-Text">Hey! I'm Mitch.</h1>
        <h2 className="greeting-Sub-Text">
          I'm a frontend developer and UI designer, and I love building awesome
          web experiences.
        </h2>
      </div>
    );
  }
}
