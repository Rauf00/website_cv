import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavLink = ({linkName}) => {
	return (
		<Link className="nav-link" 
	        to={linkName} 
	        spy={true} 
	        smooth={true} 
	        duration={500} 
	        activeClass='active'
		>{linkName}
	    </Link>
	);
}

export default NavLink