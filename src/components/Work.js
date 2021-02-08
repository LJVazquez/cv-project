import React, { useState } from 'react';
import uniqid from 'uniqid';
import WorkExperienceForm from './WorkExperienceForm';
import WorkExperiences from './WorkExperiences';

export default function Work(props) {
	const [company, cityExp, role, fromExp, toExp, descriptionExp] = props.values;
	const [experiencesArr, setExperiencesArr] = useState([
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

	function addNewExp() {
		const newExp = {
			id: uniqid(),
			company: company,
			cityExp: cityExp,
			role: role,
			fromExp: fromExp,
			toExp: toExp,
			descriptionExp: descriptionExp,
		};
		setExperiencesArr([...experiencesArr, newExp]);
	}

	// addWorkExperience(e) {
	// 	e.preventDefault();

	// 	const newExp = {
	// 		id: uniqid(),
	// 		company: this.state.company,
	// 		cityExp: this.state.cityExp,
	// 		fromExp: this.state.fromExp,
	// 		toExp: this.state.toExp,
	// 		role: this.state.role,
	// 		descriptionExp: this.state.descriptionExp,
	// 	};
	// 	this.setState((prevState) => {
	// 		return {
	// 			experiencesArr: [...prevState.experiencesArr, newExp],
	// 		};
	// 	});
	// }

	return (
		<div className="work">
			<p className="title">Work Experience</p>
			<WorkExperiences experiencesArr={experiencesArr} />
			{showForm && (
				<WorkExperienceForm
					values={props.values}
					setters={props.setters}
					functions={[addNewExp, setShowForm]}
				/>
			)}
			{!showForm && (
				<button
					className="button"
					onClick={() => setShowForm((prevState) => !prevState)}
				>
					Add experience
				</button>
			)}
		</div>
	);
}
