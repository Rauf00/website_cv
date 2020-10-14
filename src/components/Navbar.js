import React from 'react';
import './Navbar.css'
import NavLink from './NavLink'
import logo from '../images/logo.png'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light-blue ">
  				<a className="navbar-brand" href="#">
				    <img src={logo} width="30" height="35" className="d-inline-block align-top" alt="" />
				    <span className="nameHeader">Rauf Shimarov</span>
				</a>
			  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>
			  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        	<NavLink linkName="About"/>
				      </li>
				      <li className="nav-item active">
				        <NavLink linkName="Skills"/>
				      </li>
				      <li className="nav-item">
				        <NavLink linkName="Education"/>
				      </li>
				      <li className="nav-item">
        				<NavLink linkName="Projects"/>
        			  </li>
				    </ul>
			  </div>
			  <div >
			  	<div className="row">
  					<div className="col-3"><a href="#" className="fa fa-linkedin"></a></div>
				  	<div className="col-3"><a href="#" className="fa fa-github"></a></div>
				  	<div className="col-3"><a href="#" className="fa fa-skype"></a></div>
				</div>
			  	
				
				
			  </div>
			    
			</nav>
		</div>
	);
}

export default Navbar;