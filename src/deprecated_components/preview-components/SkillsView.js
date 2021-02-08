import React from 'react';

//*cicles trough an array
export default function EducationView(props) {
	const { skillsArr, printMode } = props.formData;
	const { deleteBlock } = props;

	const skillsMapped = skillsArr.map((elem) => (
		<div className="skill" key={elem.id}>
			<li>{elem.name}</li>
			<button
				onClick={() => deleteBlock(elem.id, 'skillsArr')}
				className={printMode ? 'btn btn-skill hid' : 'btn btn-skill'}
			>
				x
			</button>
		</div>
	));

	return (
		<div className="skills-container">
			<h2>Skills:</h2>
			<ul className="skills-list">{skillsMapped}</ul>
		</div>
	);
}
