import "../styles/FormInput.css";

function FormInput({ form, setForm, name, text, Tag, type, defaultForm }) {
  // Handle form changes
  const handleChange = (event) => {
    const { value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
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
          placeholder={defaultForm[name]} // Use default value for the placeholder
        />
      )}
    </div>
  );
}

export default FormInput;
