import React from 'react';
import MainDataForm from './form-components/MainDataForm';
import PersonalDataForm from './form-components/PersonalDataForm';
import WorkExperienceForm from './form-components/WorkExperienceForm';
import EducationForm from './form-components/EducationForm';

export default function Form(props) {
	return (
		<form className="form">
			<MainDataForm
				formData={props.formData}
				handleChange={props.handleChange}
			/>
			<PersonalDataForm
				formData={props.formData}
				handleChange={props.handleChange}
			/>
			<WorkExperienceForm
				formData={props.formData}
				handleChange={props.handleChange}
				addWorkExperience={props.addWorkExperience}
			/>
			<EducationForm
				formData={props.formData}
				handleChange={props.handleChange}
				addEducation={props.addEducation}
			/>
		</form>
	);
}
