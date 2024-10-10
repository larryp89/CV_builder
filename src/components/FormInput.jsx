import "../styles/FormInput.css";
import { useState } from "react";

function FormInput({ form, setForm, name, text, Tag, type }) {
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
      <Tag
        type={type}
        id={name}
        name={name}
        value={form[name] || ""}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormInput;
