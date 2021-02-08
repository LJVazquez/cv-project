import React from 'react';

export default function TextInput(props) {
	return (
		<input
			type="text"
			value={props.value}
			name={props.name}
			className={props.class}
			placeholder={props.placeholder}
			onChange={(e) => props.setter(e.target.value)}
			onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
		/>
	);
}
