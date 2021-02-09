import React from 'react';

export default function LabeledTextInput(props) {
	return (
		<div className="input-container">
			<label>{props.label}</label>
			<input
				type="text"
				value={props.value}
				className={props.class}
				onChange={(e) => props.setter(e.target.value)}
				onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
			/>
		</div>
	);
}
