import React from 'react';

export default function MainInfo(props) {
	const { firstName, lastName, career } = props.formData;

	return (
		<div className="main-info">
			<h1>
				{firstName} {lastName}
			</h1>
			<h2>{career}</h2>
		</div>
	);
}
