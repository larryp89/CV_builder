import FormInput from "./FormInput";
import "../styles/Education.css";
import { v4 as uuid } from "uuid";
import EducationEdit from "./EducationEdit";

function Education({
  defaultForm,
  handleEducationChange,
  educationInputs,
  handleEducationSubmit,
  setEducationInputs,
  detailsForm,
  setDetailsForm,
}) {
  const addHonor = (e) => {
    e.preventDefault();
    const newHonor = e.target.honors.value.trim();
    if (newHonor !== "") {
      const honorWithId = { id: uuid(), text: newHonor }; // Create an object with UUID
      setEducationInputs((prevEducation) => ({
        ...prevEducation,
        honors: [...prevEducation.honors, honorWithId], // Update the honors array with the new object
      }));

      e.target.honors.value = ""; // Clear the input after adding
    }
  };

  const deleteHonor = (id) => {
    setEducationInputs((prevEducation) => ({
      ...prevEducation,
      honors: prevEducation.honors.filter((honor) => honor.id !== id), // Remove the honor with the matching ID
    }));
  };

  return (
    <div className="education">
      <h2 className="education__title">Education</h2>
      <EducationEdit
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        setEducationInputs={setEducationInputs}
      />
      <FormInput
        text="University"
        type="text"
        placeholder={defaultForm.university}
        id="university"
        name="university"
        value={educationInputs.university} // Controlled input
        handleChange={handleEducationChange}
      />
      <FormInput
        text="Degree"
        type="text"
        placeholder={defaultForm.degree}
        id="degree"
        name="degree"
        handleChange={handleEducationChange}
        value={educationInputs.degree}
      />
      <FormInput
        text="Start Date"
        type="date"
        placeholder={defaultForm.startDate}
        id="startDate"
        name="startDate"
        handleChange={handleEducationChange}
        value={educationInputs.startDate}
      />
      <FormInput
        text="Ongoing?"
        type="checkbox"
        id="ongoing"
        name="ongoing"
        handleChange={handleEducationChange}
        checked={educationInputs.ongoing} // Make sure to use checked for checkboxes
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
            value={educationInputs.endDate}
          />

          <form action="" onSubmit={addHonor}>
            <label htmlFor="honors">Achievements/Honors/Awards</label>
            <div className="achievements-div">
              <input type="text" id="honors" name="honors" />
              <ul>
                {educationInputs.honors.map(({ id, text }) => (
                  <li key={id}>
                    {text}
                    <button type="button" onClick={() => deleteHonor(id)}>
                      X
                    </button>
                  </li>
                ))}
              </ul>
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
