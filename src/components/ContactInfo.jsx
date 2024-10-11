import "../styles/ContactInfo.css";
import FormInput from "./FormInput";

function ContactInfo({ form, setForm, defaultForm }) {
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
        defaultForm={defaultForm}
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="phoneNum"
        text="Phone number"
        Tag="input"
        type="tel"
        defaultForm={defaultForm}
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="location"
        text="Location"
        Tag="input"
        type="text"
        defaultForm={defaultForm}
      />

      <FormInput
        form={form}
        setForm={setForm}
        name="website"
        text="Website"
        Tag="input"
        type="url"
        defaultForm={defaultForm}
      />
    </div>
  );
}

export default ContactInfo;
