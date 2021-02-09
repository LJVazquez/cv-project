import React from 'react';

export default function TextInput(props) {
	return (
		<div className="num-input-container">
			<label>{props.label}</label>
			<input
				type="number"
				maxLength="4"
				minLength="4"
				value={props.value}
				className={props.class}
				onChange={(e) => props.setter(e.target.value)}
			/>
		</div>
	);
}
