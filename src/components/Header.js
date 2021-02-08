import React from 'react';
import TextInput from './basic-components/TextInput';

export default function Header(props) {
	const [
		firstName,
		lastName,
		career,
		adress1,
		adress2,
		phone,
		email,
	] = props.values;
	const [
		setFirstName,
		setLastName,
		setCareer,
		setAdress1,
		setAdress2,
		setPhone,
		setEmail,
	] = props.seters;

	return (
		<div className="header">
			<div className="header-left">
				<TextInput
					name="firstName"
					class="header-title"
					value={firstName}
					setter={setFirstName}
				/>
				<TextInput
					name="lastName"
					class="header-title"
					value={lastName}
					setter={setLastName}
				/>
				<TextInput
					name="career"
					class="header-career"
					value={career}
					setter={setCareer}
				/>
			</div>
			<div className="header-right">
				<TextInput
					name="adress1"
					class="header-contact"
					value={adress1}
					setter={setAdress1}
				/>
				<TextInput
					name="adress2"
					class="header-contact"
					value={adress2}
					setter={setAdress2}
				/>
				<TextInput
					name="phone"
					class="header-contact"
					value={phone}
					setter={setPhone}
				/>
				<TextInput
					name="email"
					class="header-contact"
					value={email}
					setter={setEmail}
				/>
			</div>
		</div>
	);
}
