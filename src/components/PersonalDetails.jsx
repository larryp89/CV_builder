import "../styles/PersonalDetails.css";
import FormInput from "./FormInput";

function PersonalDetails() {
  return (
    <div className="personal-details">
      <h2 className="personal-details__title">Personal Details</h2>
      <FormInput text="First Name" Tag="input" />
      <FormInput text="Last Name" Tag="input" />
      <FormInput text="Current Job Title" Tag="input" />
      <FormInput text="Personal Summary" Tag="textarea" />
    </div>
  );
}

export default PersonalDetails;
