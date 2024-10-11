import "../styles/Education.css";
import FormInput from "./FormInput";

function Education({ form, setForm, defaultForm }) {
  return (
    <div className="education">
      <h2 className="education__title">Education</h2>

      <FormInput
        form={form}
        setForm={setForm}
        name="university"
        text="University/Institution"
        Tag="input"
        type="text"
        defaultForm={defaultForm}

      />

      <FormInput
        form={form}
        setForm={setForm}
        name="degree"
        text="Degree/Programme/Course of study"
        Tag="input"
        type="text"
        defaultForm={defaultForm}

      />

      <FormInput
        form={form}
        setForm={setForm}
        name="startDate"
        text="Start Date"
        Tag="input"
        type="date"
        defaultForm={defaultForm}

      />
    </div>
  );
}

export default Education;
