import React from 'react';
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
					class="input"
					value={main}
					label="Establishment name"
					setter={setMain}
				/>
				<LabeledTextInput
					class="input"
					value={city}
					label="City"
					setter={setCity}
				/>
				<LabeledTextInput
					class="input"
					value={role}
					label="Role"
					setter={setRole}
				/>
				<div className="double-input-container">
					<NumberInput
						class="input"
						value={from}
						label="From:"
						setter={setFrom}
					/>
					<NumberInput class="input" value={to} label="To:" setter={setTo} />
				</div>
				<TextAreaInput
					class="input"
					value={description}
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
