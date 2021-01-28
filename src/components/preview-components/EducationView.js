import React from 'react';

//*cicles trough an array
export default function EducationView(props) {
	const { educationArr, printMode } = props.formData;
	const { deleteBlock } = props;

	const edMapped = educationArr.map((elem) => (
		<div className="edu-container" key={elem.id}>
			<div className="edu">
				<div className="company">
					<h4>{elem.degree}</h4>
					<p>{elem.establishment}</p>
					<p>
						{elem.fromEd} - {elem.toEd}
					</p>
				</div>
				<div className="role">
					<h4>{elem.cityEd}</h4>
					<p>{elem.descriptionEd}</p>
				</div>
				<button
					onClick={() => deleteBlock(elem.id, 'educationArr')}
					className={printMode ? 'btn hid' : 'btn'}
				>
					x
				</button>
			</div>
		</div>
	));

	return (
		<div className="w-exp-container">
			<h2>Education:</h2>
			{edMapped}
		</div>
	);
}
