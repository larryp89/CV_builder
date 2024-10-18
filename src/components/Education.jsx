import FormInput from "./FormInput";
import "../styles/Education.css";
import { v4 as uuid } from "uuid";

function Education({
  defaultForm,
  handleEducationChange,
  educationInputs,
  handleEducationSubmit,
  setEducationInputs,
}) {
  const addHonor = (e) => {
    e.preventDefault();
    const newHonor = e.target.honors.value.trim();
    if (newHonor !== "") {
      setEducationInputs((prevEducation) => ({
        ...prevEducation,
        honors: [...prevEducation.honors, newHonor], // Correctly update the honors array
      }));

      e.target.honors.value = ""; // Clear the input after adding
    }
  };

  return (
    <div className="education">
      <h2 className="education__title">Education</h2>
      <FormInput
        text="University"
        type="text"
        placeholder={defaultForm.university}
        id="university"
        name="university"
        handleChange={handleEducationChange}
      />
      <FormInput
        text="Degree"
        type="text"
        placeholder={defaultForm.degree}
        id="degree"
        name="degree"
        handleChange={handleEducationChange}
      />
      <FormInput
        text="Start Date"
        type="date"
        placeholder={defaultForm.startDate}
        id="startDate"
        name="startDate"
        handleChange={handleEducationChange}
      />
      <FormInput
        text="Ongoing?"
        type="checkbox"
        id="ongoing"
        name="ongoing"
        handleChange={handleEducationChange}
      />
      {/* If the checkbox is ticked, don't show the end date & honors inputs */}
      {!educationInputs.ongoing && (
        <>
          <FormInput
            text="End Date"
            type="date"
            placeholder={defaultForm.endDate}
            id="endDate"
            name="endDate"
            handleChange={handleEducationChange}
          />
          ,
          <form action="" onSubmit={addHonor}>
            <label htmlFor="honors">Achievements/Honors/Awards</label>
            <div className="achievements-div">
              <ul>
                {educationInputs.honors.map((honor) => {
                  return <li key={uuid()}>{honor}</li>;
                })}
              </ul>
              <input type="text" id="honors" name="honors" />
            </div>
            <button>Add Achievement</button>
          </form>
        </>
      )}

      <button className="education-submit" onClick={handleEducationSubmit}>
        Submit Form
      </button>
    </div>
  );
}

export default Education;
