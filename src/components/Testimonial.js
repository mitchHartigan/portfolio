import React, { Component } from 'react';

export default class Testimonial extends Component {
  render() { 
    return (
      <div className="testimonial-Text-Container">
        <h2 className="testimonial-Text">
           Mitch will be on the list of engineers that I’ll be contacting when
           I’m looking to build another engineering team as he’s an extremely
           valuable team member. Mitch is an asset to any software engineering
           team, and someone who I highly recommend.
        </h2>
        <h2 className="testimonial-Sub-Text"><i> - Tony Palmer, Head of Product Engineering at Pacific Magazines</i></h2>
      </div>
     );
  }
}
 