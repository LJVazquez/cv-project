import React from 'react';

export default function Header(props) {
	const { changeMode, printMode } = props;

	return (
		<div className="header">
			<h1>Resume builder</h1>
			<label>
				Print mode: {props.printMode ? 'On' : 'Off'}
				<br />
				<button onClick={changeMode}>Switch</button>
			</label>
		</div>
	);
}
