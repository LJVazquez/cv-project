import React from 'react';

export default function TextInput(props) {
	return (
		<label>
			{props.name}
			<input
				type="number"
				value={props.value}
				name={props.name}
				className="input"
				onChange={props.handleChange}
			/>
		</label>
	);
}
