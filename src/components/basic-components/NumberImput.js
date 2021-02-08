import React from 'react';

export default function TextInput(props) {
	return (
		<div className="num-input-container">
			<label>{props.label}</label>
			<input
				type="number"
				value={props.value}
				name={props.name}
				className={props.class}
				onChange={(e) => props.setter(e.target.value)}
			/>
		</div>
	);
}
