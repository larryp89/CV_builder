import { useState } from "react";
import FormInput from "./FormInput";
import "../styles/Education.css";

function Education({ form, setForm, defaultForm }) {
  const [localForm, setLocalForm] = useState({
    university: form.university || "",
    degree: form.degree || "",
    startDate: form.startDate || "",
    ongoing: form.ongoing || false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setForm(localForm);
  };

  return (
    <div className="education">
      <h2 className="education__title">Education</h2>
      <form onSubmit={onSubmit}>
        <FormInput
          form={localForm}
          setForm={setLocalForm}
          name="university"
          text="University"
          Tag="input"
          type="text"
          defaultForm={defaultForm}
        />
        <FormInput
          form={localForm}
          setForm={setLocalForm}
          name="degree"
          text="Degree"
          Tag="input"
          type="text"
          defaultForm={defaultForm}
        />
        <FormInput
          form={localForm}
          setForm={setLocalForm}
          name="startDate"
          text="Start Date"
          Tag="input"
          type="date"
          defaultForm={defaultForm}
        />

        {/* Checkbox to indicate if education is ongoing */}
        <FormInput
          form={localForm}
          setForm={setLocalForm}
          name="ongoing"
          text="Ongoing?"
          Tag="input"
          type="checkbox"
          defaultForm={defaultForm}
        />

        {/* Conditionally render additional fields based on checkbox */}
        {!localForm.ongoing && (
          <>
            <FormInput
              form={localForm}
              setForm={setLocalForm}
              name="endDate"
              text="End Date"
              Tag="input"
              type="date"
              defaultForm={defaultForm}
            />
            <FormInput
              form={localForm}
              setForm={setLocalForm}
              name="honors"
              text="Honors/Distinctions"
              Tag="textarea"
              defaultForm={defaultForm}
            />
          </>
        )}

        <button className="education-submit" type="submit">
          Update Education
        </button>
      </form>
    </div>
  );
}

export default Education;
