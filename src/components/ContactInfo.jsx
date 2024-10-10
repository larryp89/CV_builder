import "../styles/ContactInfo.css";
import FormInput from "./FormInput";

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2 className="contact-info__title">Contact Details</h2>
      <FormInput text="Email" Tag="input" type="email" />
      <FormInput text="Phone Number" Tag="input" type="tel" />
      <FormInput text="Location" Tag="input" />
      <FormInput text="Website/LinkedIn" Tag="input" />
    </div>
  );
}

export default ContactInfo;
