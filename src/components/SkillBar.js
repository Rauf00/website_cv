import React from 'react';
import './Skills.css'

const SkillBar = ({language, percentage}) => {
	return (
		<div className="row align-items-center justify-content-center">
			<div className="col-2">
				<p className="skillName"> {language} </p>
			</div>
			<div className="col-6">
				<div class="progress">
					<div class="border-blue progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: `${percentage}%`}}>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillBar