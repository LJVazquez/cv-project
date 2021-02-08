import React from 'react';
import Header from './preview-components/Header';
import WorkExperienceView from './preview-components/WorkExperienceView';
import EducationView from './preview-components/EducationView';
import SkillsView from './preview-components/SkillsView';

export default function Preview(props) {
	return (
		<div className="form preview">
			<Header formData={props.formData} />
			<hr />
			<WorkExperienceView
				formData={props.formData}
				deleteBlock={props.deleteBlock}
			/>
			<EducationView
				formData={props.formData}
				deleteBlock={props.deleteBlock}
			/>
			<SkillsView formData={props.formData} deleteBlock={props.deleteBlock} />
		</div>
	);
}
