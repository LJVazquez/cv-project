import React, { useState } from 'react';
import Header from './components/Header';
import Work from './components/Work';
// import uniqid from 'uniqid';

function App() {
	const [firstName, setFirstName] = useState('First Name');
	const [lastName, setLastName] = useState('Last Name');
	const [career, setCareer] = useState('Current role');
	const [adress1, setAdress1] = useState('Adress 1');
	const [adress2, setAdress2] = useState('Adress 2');
	const [phone, setPhone] = useState('Phone');
	const [email, setEmail] = useState('Email');
	const [company, setCompany] = useState('');
	const [cityExp, setCityExp] = useState('');
	const [fromExp, setFromExp] = useState('');
	const [toExp, setToExp] = useState('');
	const [role, setRole] = useState('');
	const [descriptionExp, setDescriptionExp] = useState('');
	// const [educationArr, setEducationArr] = useState([]);
	// const [establishment, setEstablishment] = useState('');
	// const [cityEd, setCityEd] = useState('');
	// const [fromEd, setFromEd] = useState('');
	// const [toEd, setToEd] = useState('');
	// const [fromExp, setFromExp] = useState('');
	// const [toExp, setToExp] = useState('');
	// const [degree, setDegree] = useState('');
	// const [descriptionEd, setDescriptionEd] = useState('');
	// const [descriptionExp, setDescriptionExp] = useState('');
	// const [skill, setSkill] = useState('');
	// const [skillsArr, setSkillsArr] = useState([]);
	// const [printMode, setPrintMode] = useState(false);

	return (
		<div className="App">
			<form className="main-container">
				<Header
					values={[firstName, lastName, career, adress1, adress2, phone, email]}
					seters={[
						setFirstName,
						setLastName,
						setCareer,
						setAdress1,
						setAdress2,
						setPhone,
						setEmail,
					]}
				/>
				<Work
					values={[company, cityExp, role, fromExp, toExp, descriptionExp]}
					setters={[
						setCompany,
						setCityExp,
						setRole,
						setFromExp,
						setToExp,
						setDescriptionExp,
					]}
				/>
			</form>
		</div>
	);
}

export default App;
