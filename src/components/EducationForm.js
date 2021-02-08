import React from 'react';
import LabeledTextInput from './basic-components/LabeledTextInput';
import NumberInput from './basic-components/NumberImput';
import TextAreaInput from './basic-components/TextAreaInput';

export default function WorkExperienceForm(props) {
	const [
		establishment,
		cityEd,
		degree,
		fromEd,
		toEd,
		descriptionEd,
	] = props.values;

	const [
		setEstablishment,
		setCityEd,
		setDegree,
		setFromEd,
		setToEd,
		setDescriptionEd,
	] = props.setters;

	return (
		<div className="education-form">
			<legend>Work Experience</legend>
			<LabeledTextInput
				name="establishment"
				class=""
				value={establishment}
				label="Establishment name"
				setter={setEstablishment}
			/>
			<LabeledTextInput
				name="cityEd"
				class=""
				value={cityEd}
				label="City"
				setter={handleChange}
			/>
			<LabeledTextInput
				name="degree"
				class=""
				value={degree}
				label="Degree"
				setter={handleChange}
			/>
			<NumberInput
				name="fromEd"
				class=""
				value={fromEd}
				label="From:"
				setter={handleChange}
			/>
			<NumberInput name="toEd" class="" value={toEd} setter={setToEd} />
			<TextAreaInput
				name="descriptionEd"
				value={descriptionEd}
				class=""
				placeholder="To:"
				setter={setDescriptionEd}
			/>
			<button onClick="">Add education</button>
		</div>
	);
}
