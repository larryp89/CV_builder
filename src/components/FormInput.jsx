import "../styles/FormInput.css";
import { useState } from "react";

function FormInput({
  text,
  placeholder = "",
  Tag = "input",
  type = "text",
  name,
  handleChange,
  value,
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
          value={value}
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
