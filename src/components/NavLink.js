import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

export default function NavLink(props) {
  return (
    <div>
      <Link
        className={props.linkStyle}
        activeClass={true}
        to={props.scrollTarget}
        spy={true}
        offset={-70}
        delay={0}
        duration={1000}
      >{props.linkText}</Link>
    </div>
  );
}
