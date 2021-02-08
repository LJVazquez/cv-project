import React from 'react';
import TextInput from './basic-components/TextInput';

export default function PersonalDataForm(props) {
	const { skill } = props.formData;
	const { handleChange, addSkill } = props;
	return (
		<fieldset>
			<TextInput name="skill" value={skill} handleChange={handleChange} />
			<button onClick={addSkill}>Add skill</button>
		</fieldset>
	);
}
