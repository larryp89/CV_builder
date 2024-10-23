import FormInput from "./FormInput";
import { useState } from "react";
import EditWorkExp from "./EditWorkExperience";
import { v4 as uuid } from "uuid";

function WorkExperience({
  defaultForm,
  detailsForm,
  setDetailsForm,
  handleSubmit,
}) {
  const [workExpInputs, setWorkExpInputs] = useState({
    id: null,
    title: "",
    company: "",
    startDate: "",
    ongoing: false,
    endDate: "",
    responsibilities: [],
  });

  const handleWorkExpChange = (e) => {
    // Update work experience inputs
    const { name, value, type, checked } = e.target;
    setWorkExpInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetData = () => {
    // Reset work experience state
    setWorkExpInputs({
      id: null,
      title: "",
      company: "",
      startDate: "",
      ongoing: false,
      endDate: "",
      responsibilities: [],
    });
  };

  const addResponsibility = (e) => {
    e.preventDefault();
    const newResponsibility = e.target.responsibilities.value.trim();
    if (newResponsibility !== "") {
      const responsibilityWithId = { id: uuid(), text: newResponsibility }; // Create an object with UUID
      setWorkExpInputs((prevWorkExp) => ({
        ...prevWorkExp,
        responsibilities: [
          ...prevWorkExp.responsibilities,
          responsibilityWithId,
        ], // Update the responsibilities array with the new object
      }));

      e.target.responsibilities.value = ""; // Clear the input after adding
    }
  };

  const deleteHonor = (id) => {
    setWorkExpInputs((prevWorkExp) => ({
      ...prevWorkExp,
      responsibilities: prevWorkExp.responsibilities.filter(
        (responsibility) => responsibility.id !== id
      ), // Remove the honor with the matching ID
    }));
  };

  return (
    <div className="preview__work-experience">
      <h2 className="work-experience__title">Work Experience</h2>
      <EditWorkExp
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        setWorkExpInputs={setWorkExpInputs}
      />

      <FormInput
        text="Title/Position"
        type="text"
        placeholder={defaultForm.title}
        name="title"
        handleChange={handleWorkExpChange}
        value={workExpInputs.title}
      />

      <FormInput
        text="Company/Organisation"
        type="text"
        placeholder={defaultForm.company}
        name="company"
        handleChange={handleWorkExpChange}
        value={workExpInputs.company}
      />

      <FormInput
        text="Start Date"
        type="date"
        placeholder={defaultForm.jobStartDate}
        name="startDate"
        handleChange={handleWorkExpChange}
        value={workExpInputs.startDate}
      />

      <FormInput
        text="Ongoing?"
        type="checkbox"
        name="ongoing"
        handleChange={handleWorkExpChange}
        checked={workExpInputs.ongoing}
      />

      {!workExpInputs.ongoing && (
        <>
          <FormInput
            text="End Date"
            type="date"
            placeholder={defaultForm.jobEndDate}
            name="endDate"
            handleChange={handleWorkExpChange}
            value={workExpInputs.endDate}
          />

          <form action="" onSubmit={addResponsibility}>
            <label htmlFor="responsibilities">Responsibilities</label>
            <div className="responsibilities-div">
              <input type="text" name="responsibilities" />
              <ul>
                {workExpInputs.responsibilities.map(({ id, text }) => (
                  <li key={id}>
                    {text}
                    <button type="button" onClick={() => deleteHonor(id)}>
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <button>Add Achievement</button>
            </div>
          </form>
        </>
      )}

      <button
        onClick={(e) => {
          handleSubmit(e, workExpInputs, "workExp");
          resetData();
        }}
      >
        Submit Work Exp
      </button>
    </div>
  );
}

export default WorkExperience;
