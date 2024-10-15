import "../styles/PersonalDetails.css";
import FormInput from "./FormInput";

function PersonalDetails({ form, setForm, defaultForm }) {
  return (
    <div className="personal-details">
      <h2 className="personal-details__title">Personal Details</h2>

      <FormInput
        form={form}
        setForm={setForm}
        name="firstName"
        text="First Name"
        Tag="input"
        type="text"
        defaultForm={defaultForm}
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="lastName"
        text="Last Name"
        Tag="input"
        type="text"
        defaultForm={defaultForm}
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="currentJob"
        text="Current Job"
        Tag="input"
        type="text"
        defaultForm={defaultForm}
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="personalSummary"
        text="Personal Summary"
        Tag="textarea"
        type="text"
        defaultForm={defaultForm}
      />
    </div>
  );
}

export default PersonalDetails;
