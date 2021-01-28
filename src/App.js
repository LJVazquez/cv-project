import React from 'react';
import uniqid from 'uniqid';
import Form from './components/Form';
import Preview from './components/Preview';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: 'John',
			lastName: 'Doe',
			career: 'Bio Engineer',
			adress1: '123 fake street',
			adress2: 'Colorado, US',
			phone: '555-1234',
			email: 'goat@goat.com',
			experiencesArr: [],
			company: 'Google',
			cityExp: 'Toronto',
			fromExp: '2010',
			toExp: '2020',
			role: 'Dev Ops',
			descriptionExp:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio. ',
			educationArr: [],
			establishment: 'Harvard',
			cityEd: 'California',
			fromEd: '2012',
			toEd: '2015',
			degree: 'Bio engineer',
			descriptionEd: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			skill: 'MS Office',
			skillsArr: [],
			printMode: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.addWorkExperience = this.addWorkExperience.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.deleteBlock = this.deleteBlock.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.changeMode = this.changeMode.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	}

	addWorkExperience(e) {
		e.preventDefault();

		const newExp = {
			id: uniqid(),
			company: this.state.company,
			cityExp: this.state.cityExp,
			fromExp: this.state.fromExp,
			toExp: this.state.toExp,
			role: this.state.role,
			descriptionExp: this.state.descriptionExp,
		};
		this.setState((prevState) => {
			return {
				experiencesArr: [...prevState.experiencesArr, newExp],
			};
		});
	}

	addEducation(e) {
		e.preventDefault();

		const newEd = {
			id: uniqid(),
			establishment: this.state.establishment,
			cityEd: this.state.cityEd,
			fromEd: this.state.fromEd,
			toEd: this.state.toEd,
			degree: this.state.degree,
			descriptionEd: this.state.descriptionEd,
		};
		this.setState((prevState) => {
			return {
				educationArr: [...prevState.educationArr, newEd],
			};
		});
	}

	addSkill(e) {
		e.preventDefault();
		const newSkill = { id: uniqid(), name: this.state.skill };
		this.setState((prevState) => ({
			skillsArr: [...prevState.skillsArr, newSkill],
		}));
	}

	deleteBlock(id, type) {
		this.setState((prevState) => ({
			[type]: prevState[type].filter((elem) => !(elem.id === id)),
		}));
	}

	changeMode() {
		this.setState(
			(prevState) => ({
				printMode: !prevState.printMode,
			}),
			() => this.hideBtns()
		);
	}

	hideBtns() {
		const btns = document.querySelectorAll('.btn');
		if (this.state.printMode) btns.forEach((elem) => elem.classList.add('hid'));
		else btns.forEach((elem) => elem.classList.remove('hid'));
	}

	render() {
		return (
			<div className="App">
				<Header changeMode={this.changeMode} printMode={this.state.printMode} />
				<Form
					formData={this.state}
					handleChange={this.handleChange}
					addWorkExperience={this.addWorkExperience}
					addEducation={this.addEducation}
					addSkill={this.addSkill}
				/>
				<Preview formData={this.state} deleteBlock={this.deleteBlock} />
			</div>
		);
	}
}

export default App;
