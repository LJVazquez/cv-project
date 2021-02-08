import React, { useState } from 'react';
import LabeledTextInput from './basic-components/LabeledTextInput';
import NumberInput from './basic-components/NumberImput';
import TextAreaInput from './basic-components/TextAreaInput';

export default function WorkExperienceForm(props) {
	const [company, cityExp, role, fromExp, toExp, descriptionExp] = props.values;
	const [addNewExp, setShowForm] = props.functions;

	const [
		setCompany,
		setCityExp,
		setRole,
		setFromExp,
		setToExp,
		setDescriptionExp,
	] = props.setters;

	function handleConfirm(e) {
		e.preventDefault();
		addNewExp();
		resetFields();
		setShowForm(false);
	}

	function resetFields() {
		setCompany('');
		setCityExp('');
		setRole('');
		setFromExp('');
		setToExp('');
		setDescriptionExp('');
	}

	return (
		<div className="work-experience-container">
			<div className="work-experience-fields">
				<LabeledTextInput
					name="Company"
					class="input"
					value={company}
					label="Establishment name"
					setter={setCompany}
				/>
				<LabeledTextInput
					name="cityExp"
					class="input"
					value={cityExp}
					label="City"
					setter={setCityExp}
				/>
				<LabeledTextInput
					name="role"
					class="input"
					value={role}
					label="Role"
					setter={setRole}
				/>
				<div className="double-input-container">
					<NumberInput
						name="fromExp"
						class="input"
						value={fromExp}
						label="From:"
						setter={setFromExp}
					/>
					<NumberInput
						name="toExp"
						class="input"
						value={toExp}
						label="To:"
						setter={setToExp}
					/>
				</div>
				<TextAreaInput
					name="descriptionExp"
					value={descriptionExp}
					class="input"
					label="Further Descriptions or Achievements:"
					setter={setDescriptionExp}
				/>
			</div>
			<div className="input-container">
				<button onClick={(e) => handleConfirm(e)}>Confirm</button>
				<button onClick={() => setShowForm(false)}>Cancel</button>
			</div>
		</div>
	);
}
