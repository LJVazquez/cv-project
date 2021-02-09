import React from 'react';

export default function HistoryListDisplay(props) {
	const { blocksArr, removeBlockByID } = props;
	const printMode = false;

	const mappedBlocks = blocksArr.map((elem) => (
		<div key={elem.id}>
			<div className="w-exp">
				<div className="company">
					<h4>{elem.company}</h4>
					<p>{elem.cityExp}</p>
					<p>
						{elem.fromExp} - {elem.toExp}
					</p>
				</div>
				<div className="role">
					<h4>{elem.role}</h4>
					<p>{elem.descriptionExp}</p>
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
