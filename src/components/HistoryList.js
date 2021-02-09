import React, { useState } from 'react';
import uniqid from 'uniqid';
import HistoryListForm from './HistoryListForm';
import HistoryListDisplay from './HistoryListDisplay';

export default function HistoryList(props) {
	const [main, city, role, from, to, description] = props.values;
	const [blocksArr, setBlocksArr] = useState([
		{
			id: uniqid(),
			company: 'Microsoft',
			cityExp: 'Silicon Valley',
			fromExp: 2012,
			toExp: 2021,
			role: 'Software Engineer',
			descriptionExp:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		},
	]);
	let [showForm, setShowForm] = useState(false);

	function addNewBlock() {
		const newBlock = {
			id: uniqid(),
			main: main,
			city: city,
			role: role,
			from: from,
			to: to,
			description: description,
		};
		setBlocksArr([...blocksArr, newBlock]);
	}

	function removeBlockByID(id, e) {
		e.preventDefault();
		const filteredBlockArr = blocksArr.filter((elem) => elem.id !== id);
		setBlocksArr(filteredBlockArr);
	}

	return (
		<div className="work">
			<p className="title">{props.title}</p>
			<HistoryListDisplay
				blocksArr={blocksArr}
				removeBlockByID={removeBlockByID}
			/>
			{showForm && (
				<HistoryListForm
					values={props.values}
					setters={props.setters}
					functions={[addNewBlock, setShowForm]}
				/>
			)}
			{!showForm && (
				<button
					className="open-form"
					onClick={() => setShowForm((prevState) => !prevState)}
				>
					Add experience
				</button>
			)}
		</div>
	);
}
