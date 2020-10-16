import React from 'react';
import './Education.css'
import sfuLogo from '../images/sfuLogo.png'
import columbiaLogo from '../images/columbiaLogo.jpg'
import nationalSchoolLogo from '../images/nationalSchoolLogo.png'

const Education = () => {
	return (
		<div>
			<br /><br /><br />
			<h1> Education</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i><img src={sfuLogo} /></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Simon Fraser Univesity</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i><img src={columbiaLogo} /></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Columbia College</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i><img src={nationalSchoolLogo} /></i></div>
                            <div class="timeline-content">
                                <h3 class="title">National School of Physics & Math</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       	<br/>
	</div>
	);
}

export default Education