import "../styles/PersonalDetails.css";
import FormInput from "./FormInput";

function PersonalDetails({ defaultForm, handleDynamicChange, detailsForm }) {
  return (
    <div className="personal-details">
      <h2 className="personal-details__title">Personal Details</h2>

      <FormInput
        text="First Name"
        type="text"
        placeholder={defaultForm.firstName}
        name="firstName"
        handleChange={handleDynamicChange}
        value={detailsForm.firstName}
      />
      <FormInput
        text="Last Name"
        type="text"
        placeholder={defaultForm.lastName}
        name="lastName"
        handleChange={handleDynamicChange}
        value={detailsForm.lastName}
      />
      <FormInput
        text="Current Job Title"
        type="text"
        placeholder={defaultForm.currentJob}
        name="currentJob"
        handleChange={handleDynamicChange}
        value={detailsForm.currentJob}
      />
      <FormInput
        text="Personal Summary"
        Tag="textarea"
        name="personalSummary"
        handleChange={handleDynamicChange}
        value={detailsForm.personalSummary}
      />
    </div>
  );
}

export default PersonalDetails;
