import FormInput from "./FormInput";
import { v4 as uuid } from "uuid";
import EditEducation from "./EditEducation";
import { useState } from "react";
import "../styles/Sidebar.css";

function Education({ defaultForm, detailsForm, setDetailsForm, handleSubmit }) {
  const [educationInputs, setEducationInputs] = useState({
    id: null,
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    honors: [],
  });

  const handleEducationChange = (e) => {
    // Update education inputs as above
    const { name, value, type, checked } = e.target;
    setEducationInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetData = () => {
    // Reset work experience state
    setEducationInputs({
      id: null,
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      ongoing: false,
      honors: [],
    });
  };

  const addHonor = (e) => {
    e.preventDefault();
    const newHonor = e.target.honors.value.trim();
    if (newHonor !== "") {
      const honorWithId = { id: uuid(), text: newHonor };
      setEducationInputs((prevEducation) => ({
        ...prevEducation,
        honors: [...prevEducation.honors, honorWithId],
      }));

      e.target.honors.value = "";
    }
  };

  const deleteHonor = (id) => {
    setEducationInputs((prevEducation) => ({
      ...prevEducation,
      // Remove the honor with the matching ID
      honors: prevEducation.honors.filter((honor) => honor.id !== id),
    }));
  };

  return (
    <div className="education-info">
      <h2 className="education__title">Education</h2>
      <EditEducation
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
      <div className="checkbox">
        <FormInput
          text="Ongoing"
          type="checkbox"
          id="ongoing"
          name="ongoing"
          handleChange={handleEducationChange}
          checked={educationInputs.ongoing} // Make sure to use checked for checkboxes
        />
      </div>
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
            <label htmlFor="honors">
              Achievements/Honors/Awards
              <div className="list-div">
                <input
                  type="text"
                  placeholder="Enter achievement"
                  id="honors"
                />
                <button className="button add-button">+</button>
              </div>
              <ul className="item-list">
                {educationInputs.honors.map(({ id, text }) => (
                  <li key={id}>
                    {`${text} `}
                    <button
                      className="button x-button"
                      type="button"
                      onClick={() => deleteHonor(id)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            </label>
          </form>
        </>
      )}

      <button
        className="button submit-button"
        onClick={(e) => {
          handleSubmit(e, educationInputs, "education");
          resetData(); // Reset form after submission
        }}
      >
        Submit Education
      </button>
    </div>
  );
}

export default Education;
