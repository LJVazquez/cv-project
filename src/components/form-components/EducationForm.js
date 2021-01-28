import React from 'react';
import TextInput from './basic-components/TextInput';
import NumberInput from './basic-components/NumberImput';
import TextAreaInput from './basic-components/TextAreaInput';

export default function WorkExperienceForm(props) {
	const {
		establishment,
		cityEd,
		degree,
		fromEd,
		toEd,
		descriptionEd,
	} = props.formData;
	const { handleChange, addEducation } = props;

	return (
		<fieldset>
			<legend>Work Experience</legend>
			<TextInput
				name="establishment"
				value={establishment}
				handleChange={handleChange}
			/>
			<TextInput name="cityEd" value={cityEd} handleChange={handleChange} />
			<TextInput name="degree" value={degree} handleChange={handleChange} />
			<NumberInput name="fromEd" value={fromEd} handleChange={handleChange} />
			<NumberInput name="toEd" value={toEd} handleChange={handleChange} />
			<TextAreaInput
				name="descriptionEd"
				value={descriptionEd}
				handleChange={handleChange}
			/>
			<button onClick={addEducation}>Add education</button>
		</fieldset>
	);
}
