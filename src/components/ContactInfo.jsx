import "../styles/ContactInfo.css";
import FormInput from "./FormInput";

function ContactInfo({ defaultForm, handleDynamicChange, detailsForm }) {
  return (
    <div className="contact-info">
      <h2 className="contact-details__title">Contact Details</h2>

      <FormInput
        text="Email "
        type="email"
        placeholder={defaultForm.email}
        name="email"
        handleChange={handleDynamicChange}
        value={detailsForm.email}
      />
      <FormInput
        text="Phone"
        type="tel"
        placeholder={defaultForm.phoneNum}
        name="phoneNum"
        handleChange={handleDynamicChange}
        value={detailsForm.phone}
      />
      <FormInput
        text="Location"
        type="text"
        placeholder={defaultForm.location}
        name="location"
        handleChange={handleDynamicChange}
        value={detailsForm.location}
      />
      <FormInput
        text="Website"
        type="url"
        placeholder={defaultForm.website}
        name="website"
        handleChange={handleDynamicChange}
        value={detailsForm.website}
      />
    </div>
  );
}

export default ContactInfo;
