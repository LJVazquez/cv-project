import React from 'react';

export default function TextInput(props) {
	return (
		<div className="input-container">
			<label>{props.label}</label>
			<textarea
				value={props.value}
				name={props.name}
				className={props.class}
				onChange={(e) => props.setter(e.target.value)}
			/>
		</div>
	);
}
