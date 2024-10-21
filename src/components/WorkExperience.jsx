import FormInput from "./FormInput";

function WorkExperience({ defaultForm, handleDynamicChange }) {
  return (
    <div className="work-experience">
      <h2 className="work-experience__title">Work Experience</h2>

      <FormInput
        text="Title/Position"
        type="text"
        placeholder={defaultForm.title}
        id="title"
        name="title"
        handleChange={handleDynamicChange}
      />
      {/* <FormInput
        text="Last Name"
        type="text"
        placeholder={defaultForm.lastName}
        id="lastName"
        name="lastName"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Current Job Title"
        type="text"
        placeholder={defaultForm.currentJob}
        id="currentJob"
        name="currentJob"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Personal Summary"
        Tag="textarea"
        id="personalSummary"
        name="personalSummary"
        handleChange={handleDynamicChange}
      /> */}
    </div>
  );
}

// export default WorkExperience;
