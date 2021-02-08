import React from 'react';

export default function TextInput(props) {
	return (
		<label>
			{props.name}
			<input
				type="text"
				value={props.value}
				name={props.name}
				className="input"
				onChange={props.handleChange}
			/>
		</label>
	);
}
