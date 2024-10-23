import "../styles/ContactInfo.css";
import FormInput from "./FormInput";

function ContactInfo({ defaultForm, handleDynamicChange }) {
  return (
    <div className="contact-info">
      <h2 className="contact-details__title">Contact Details</h2>

      <FormInput
        text="Email "
        type="email"
        placeholder={defaultForm.email}
        name="email"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Phone"
        type="tel"
        placeholder={defaultForm.phoneNum}
        name="phoneNum"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Location"
        type="text"
        placeholder={defaultForm.location}
        name="location"
        handleChange={handleDynamicChange}
      />
      <FormInput
        text="Website"
        type="url"
        placeholder={defaultForm.website}
        name="website"
        handleChange={handleDynamicChange}
      />
    </div>
  );
}

export default ContactInfo;
