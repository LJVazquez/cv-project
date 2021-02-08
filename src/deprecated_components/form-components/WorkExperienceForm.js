import React from 'react';
import TextInput from './basic-components/TextInput';
import NumberInput from './basic-components/NumberImput';
import TextAreaInput from './basic-components/TextAreaInput';

export default function WorkExperienceForm(props) {
	const {
		company,
		cityExp,
		role,
		fromExp,
		toExp,
		descriptionExp,
	} = props.formData;
	const { handleChange, addWorkExperience } = props;

	return (
		<fieldset>
			<legend>Work Experience</legend>
			<TextInput name="company" value={company} handleChange={handleChange} />
			<TextInput name="cityExp" value={cityExp} handleChange={handleChange} />
			<TextInput name="role" value={role} handleChange={handleChange} />
			<NumberInput name="fromExp" value={fromExp} handleChange={handleChange} />
			<NumberInput name="toExp" value={toExp} handleChange={handleChange} />
			<TextAreaInput
				name="descriptionExp"
				value={descriptionExp}
				handleChange={handleChange}
			/>
			<button onClick={addWorkExperience}>Add experience</button>
		</fieldset>
	);
}
