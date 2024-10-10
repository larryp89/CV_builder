import "../styles/FormInput.css";

function FormInput({ form, setForm, name, text, Tag, type }) {
  const handleChange = (event) => {
    const { value } = event.target; // Destructuring target
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
          value={form[name] || ""}
          onChange={handleChange}
        />
      ) : (
        <Tag
          type={type}
          id={name}
          name={name}
          value={form[name] || ""}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default FormInput;
