import "../styles/FormInput.css";

function FormInput({ form, setForm, name, text, Tag, type, defaultForm }) {
  // Handle form changes
  const handleChange = (event) => {
    const { value, checked } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="form-input">
      <label htmlFor={name}>{text}</label>

      {Tag === "textarea" ? (
        <Tag
          id={name}
          name={name}
          value={form[name] || ""} // Controlled value from form
          onChange={handleChange}
          placeholder={defaultForm[name]} // Use default value for the placeholder
        />
      ) : (
        <Tag
          type={type}
          id={name}
          name={name}
          value={form[name] || ""} // Controlled value from form
          onChange={handleChange}
          // Conditionally add the placeholder attribute
          {...(type !== "checkbox" ? { placeholder: defaultForm[name] } : {})}
        />
      )}
    </div>
  );
}

export default FormInput;
