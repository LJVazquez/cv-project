import React from 'react';

export default function PersonalInfo(props) {
	const { adress1, adress2, phone, email } = props.formData;
	return (
		<div className="personal-info">
			<h4>{adress1}</h4>
			<h4>{adress2}</h4>
			<h4>{phone}</h4>
			<h4>{email}</h4>
		</div>
	);
}
