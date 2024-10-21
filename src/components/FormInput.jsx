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
  // const handleInputChange = (event) => {
  //   // Capture the change
  //   const name = event.target.name;
  //   const value =
  //     type === "checkbox" ? event.target.checked : event.target.value;

  //   // Update the form input with the new value
  //   setDetailsForm((prevDetails) => {
  //     let newDetails = { ...prevDetails, [name]: value };

  //     // Check if the "ongoing" checkbox is checked
  //     if (name === "ongoing" && value === true) {
  //       // Set endDate to "Present" when ongoing is true
  //       newDetails.endDate = "Present";
  //     } else if (name === "ongoing" && value === false) {
  //       // Clear endDate if ongoing is unchecked
  //       newDetails.endDate = "";
  //     }
  //     return newDetails;
  //   });
  // };

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
