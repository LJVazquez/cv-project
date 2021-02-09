import React from 'react';

export default function HistoryListDisplay(props) {
	const { blocksArr, removeBlockByID } = props;
	const printMode = false;

	const mappedBlocks = blocksArr.map((elem) => (
		<div key={elem.id}>
			<div className="w-exp">
				<div className="main">
					<h4>{elem.main}</h4>
					<p>{elem.city}</p>
					<p>
						{elem.from} - {elem.to}
					</p>
				</div>
				<div className="role">
					<h4>{elem.role}</h4>
					<p>{elem.description}</p>
				</div>
				<button
					className={printMode ? 'btn hid' : 'btn'}
					onClick={(e) => removeBlockByID(elem.id, e)}
				>
					x
				</button>
			</div>
		</div>
	));
	return <div className="HistoryListDisplay">{mappedBlocks}</div>;
}
