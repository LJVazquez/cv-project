import React from 'react';
import TextInput from './basic-components/TextInput';

export default function PersonalDataForm(props) {
	const { adress1, adress2, phone, email } = props.formData;
	const { handleChange } = props;
	return (
		<fieldset>
			<legend>Personal Data</legend>
			<TextInput name="adress1" value={adress1} handleChange={handleChange} />
			<TextInput name="adress2" value={adress2} handleChange={handleChange} />
			<TextInput name="phone" value={phone} handleChange={handleChange} />
			<TextInput name="email" value={email} handleChange={handleChange} />
		</fieldset>
	);
}
