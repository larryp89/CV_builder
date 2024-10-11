import "../styles/ContactInfo.css";
import FormInput from "./FormInput";

function ContactInfo({form, setForm}) {
  return (
    <div className="contact-info">
      <h2 className="contact-details__title">Contact Details</h2>

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

export default ContactInfo;
