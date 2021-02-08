import React from 'react';

export default function WorkExperiences(props) {
	const { experiencesArr } = props;
	const printMode = false;

	const mappedExperiences = experiencesArr.map((elem) => (
		<div key={elem.id}>
			<div className="w-exp">
				<div className="company">
					<h4>{elem.company}</h4>
					<p>{elem.cityExp}</p>
					<p>
						{elem.fromExp} - {elem.toExp}
					</p>
				</div>
				<div className="role">
					<h4>{elem.role}</h4>
					<p>{elem.descriptionExp}</p>
				</div>
				<button className={printMode ? 'btn hid' : 'btn'}>x</button>
			</div>
		</div>
	));
	return <div className="work-experiences">{mappedExperiences}</div>;
}
