import React from 'react';

export default function TextInput(props) {
	return (
		<div className="input-container">
			<label>{props.label}</label>
			<textarea
				style={{ resize: 'none' }}
				value={props.value}
				name={props.name}
				className={props.class}
				onChange={(e) => props.setter(e.target.value)}
				placeholder="Short and concise."
			/>
		</div>
	);
}
