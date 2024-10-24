import "../styles/FormInput.css";

function FormInput({
  text,
  placeholder = "",
  Tag = "input",
  type = "text",
  name,
  handleChange,
  value,
  checked, // Add checked prop for checkboxes
}) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{text}</label>
      {Tag === "input" ? (
        <Tag
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={handleChange}
          value={type === "checkbox" ? undefined : value} // For non-checkbox inputs, use value
          checked={type === "checkbox" ? checked : undefined} // For checkboxes, use checked
        />
      ) : (
        <Tag
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={handleChange}
          value={value}
        />
      )}
    </div>
  );
}

export default FormInput;
