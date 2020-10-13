import React from 'react';
import './Skills.css';
import SkillBar from './SkillBar';

const Skills = () => {
	return (
		<div className="conateiner-fluid background-blue">
			<br /><br />
			<div className="row">
				<div className="col">
					<h1 className="skillsHeader"> Skills</h1>
				</div>
			</div>
			<br />
			<SkillBar language="HTML" percentage="100" />
			<SkillBar language="CSS" percentage="75" />
			<SkillBar language="JavaScript" percentage="80" />
			<SkillBar language="To be added..." percentage="0" />
			<br /><br />
		</div>
	);
}

export default Skills