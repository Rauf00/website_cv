import React from 'react';
import './Projects.css'
import mazeGame from '../images/mazeGame.png'
import comingSoon from '../images/coming-soon.png'
const Projects = () => {
	return (
		<div className="conateiner-fluid background-blue">
			<div className="row">
				<div className="col">
					<h1 className="projectsHeader"> Projects </h1>
				</div>
			</div>
			<br />
			<div className="projectsDiv">
				
				<div className="card-deck">
		  			<div className="card">
					    <img className="card-img-top" src={mazeGame} alt="Card image cap" height="50%"/>
					    <div className="card-body">
					      <h5 className="card-title">Maze Game</h5>
					      <p className="card-text">Best description of Maze Game</p>
					      
					    </div>
					    <a href="https://mouse-vs-cats.herokuapp.com/" target="_blank" className="btn btn-primary linkToProject" role="button" aria-disabled="true">Go to Maze Game</a>
		  			</div>
		  			<div className="card">
		    			<img className="card-img-top" src={comingSoon} alt="Card image cap" height="50%"/>
		    			<div className="card-body">
					      <h5 className="card-title">Battle Blobs</h5>
					      <p className="card-text">Best description of Battle Blobs</p>
		    			</div>
		    			<a href="https://cloud5app.herokuapp.com/" target="_blank" className="btn btn-primary linkToProject" role="button" aria-disabled="true">Go to Battle Blobs</a>
		  			</div>
		  			<div className="card">
					    <img className="card-img-top" src={comingSoon} alt="Card image cap" height="50%"/>
					    <div className="card-body">
					      <h5 className="card-title">Best Project</h5>
					      <p className="card-text">Coming Soon...</p>
					    </div>
					    <a href="https://google.com/" target="_blank" className="btn btn-primary linkToProject" role="button" aria-disabled="true">Go to ...</a>
		  			</div>
		  			
				</div>
			</div>
		</div>
	);
}

export default Projects