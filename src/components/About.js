import React from 'react';
import './About.css'
import aboutImage from '../images/about.png'
const About = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">

					<img src={aboutImage} alt="about" width="100%" height="100%" className="img-fluid float-left aboutImage" />
					<br /><hr />
				</div>
				<div className="aboutText col">
					<h1>Hello, my name is Rauf!</h1>
					<p>I am a full-stack Web Developer. Innovation is my passion</p>
					<button type="button" class="btn btn-primary">Contact Me</button>
				</div>
			</div>
		</div>
	);
}

export default About