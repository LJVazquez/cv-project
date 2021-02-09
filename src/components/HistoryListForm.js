import React, { useState } from 'react';
import LabeledTextInput from './basic-components/LabeledTextInput';
import NumberInput from './basic-components/NumberImput';
import TextAreaInput from './basic-components/TextAreaInput';

export default function HistoryListForm(props) {
	const [main, city, role, from, to, description] = props.values;
	const [addNewBlock, setShowForm] = props.functions;

	const [
		setMain,
		setCity,
		setRole,
		setFrom,
		setTo,
		setDescription,
	] = props.setters;

	function handleConfirm(e) {
		e.preventDefault();
		addNewBlock();
		resetFields();
		setShowForm(false);
	}

	function resetFields() {
		setMain('');
		setCity('');
		setRole('');
		setFrom('');
		setTo('');
		setDescription('');
	}

	return (
		<div className="history-list-container">
			<div className="history-list-fields">
				<LabeledTextInput
					name="Company"
					class="input"
					value={main}
					label="Establishment name"
					setter={setMain}
				/>
				<LabeledTextInput
					name="city"
					class="input"
					value={city}
					label="City"
					setter={setCity}
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
						name="from"
						class="input"
						value={from}
						label="From:"
						setter={setFrom}
					/>
					<NumberInput
						name="to"
						class="input"
						value={to}
						label="To:"
						setter={setTo}
					/>
				</div>
				<TextAreaInput
					name="description"
					value={description}
					class="input"
					label="Further Descriptions or Achievements:"
					setter={setDescription}
				/>
			</div>
			<div className="input-container">
				<button onClick={(e) => handleConfirm(e)}>Confirm</button>
				<button onClick={() => setShowForm(false)}>Cancel</button>
			</div>
		</div>
	);
}
