import "../styles/PersonalDetails.css";
import FormInput from "./FormInput";

function PersonalDetails({ form, setForm }) {
  if (!form) {
    return <div>Loading...</div>;
  }

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
      />
    </div>
  );
}

export default PersonalDetails;
