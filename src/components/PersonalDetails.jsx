import "../styles/PersonalDetails.css";
import FormInput from "./FormInput";

function PersonalDetails({ form, setForm }) {
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

      <FormInput
        form={form}
        setForm={setForm}
        name="lastName"
        text="Last Name"
        Tag="input"
        type="text"
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="currentJob"
        text="Current Job"
        Tag="input"
        type="text"
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="personalSummary"
        text="Personal Summary"
        Tag="textarea"
        type="text"
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="email"
        text="email"
        Tag="input"
        type="email"
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="phoneNum"
        text="Phone number"
        Tag="input"
        type="tel"
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="location"
        text="Location"
        Tag="input"
        type="text"
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="website"
        text="Website"
        Tag="input"
        type="url"
      />
    </div>
  );
}

export default PersonalDetails;
