import React from 'react';
import MainInfo from './basic-components/MainInfo';
import PersonalInfo from './basic-components/PersonalInfo';

export default function Header(props) {
	return (
		<div className="preview-header">
			<MainInfo formData={props.formData} />
			<PersonalInfo formData={props.formData} />
		</div>
	);
}
