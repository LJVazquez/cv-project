import React from 'react';
import TextInput from './basic-components/TextInput';

export default function MainDataForm(props) {
	const { firstName, lastName, career } = props.formData;
	const { handleChange } = props;
	return (
		<fieldset>
			<legend>Personal Data</legend>
			<TextInput
				name="firstName"
				value={firstName}
				handleChange={handleChange}
			/>
			<TextInput name="lastName" value={lastName} handleChange={handleChange} />
			<TextInput name="career" value={career} handleChange={handleChange} />
		</fieldset>
	);
}
