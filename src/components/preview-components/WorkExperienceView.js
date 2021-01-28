import React from 'react';

//*cicles trough an array
export default function WorkExperience(props) {
	const { experiencesArr } = props.formData;
	const { deleteBlock } = props;

	const expMapped = experiencesArr.map((elem) => (
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
				<button
					onClick={() => deleteBlock(elem.id, 'experiencesArr')}
					className="del-exp"
				>
					x
				</button>
			</div>
		</div>
	));

	return (
		<div className="w-exp-container">
			<h2>Work Experience:</h2>
			{expMapped}
		</div>
	);
}
