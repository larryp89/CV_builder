// TechnicalSkills.jsx
import EditTechnicalSkills from "./EditTechnicalSkills";
import FormInput from "./FormInput";
import { useState } from "react";

function TechnicalSkills({
  defaultForm,
  detailsForm,
  setDetailsForm,
  handleSubmit,
}) {
  // State to hold the current inputs being edited
  const [skillInputs, setSkillInputs] = useState({
    id: null,
    category: "",
    skills: [],
  });

  // Handle category input change
  const handleCategoryChange = (e) => {
    setSkillInputs((prev) => ({
      // Copy the previous state & update category with value from category input
      ...prev,
      category: e.target.value,
    }));
  };

  const addSkill = (e) => {
    e.preventDefault();

    // Get value from the input field that has name="skill" & trim
    const newSkill = e.target.skill.value.trim();

    // If either category is empty OR newSkill is empty, exit the function
    if (!skillInputs.category || !newSkill) return;

    // Update the skillInputs state:
    setSkillInputs((prev) => ({
      // Copy all previous state (category, id, etc.)
      ...prev,
      // Create new array with all previous skills plus new skill
      skills: [...prev.skills, newSkill],
    }));

    // Reset the input field to empty string
    e.target.skill.value = "";
  };

  // Delete a specific skill
  const deleteSkill = (skillToDelete) => {
    setSkillInputs((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToDelete),
    }));
  };

  // Reset form after submission
  const resetData = () => {
    setSkillInputs({
      id: null,
      category: "",
      skills: [],
    });
  };

  return (
    <div>
      <h2>Technical Skills</h2>
      <p>
        Showcase the most relevant skills applicable to the job you're applying
        for.
      </p>

      <EditTechnicalSkills
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        setSkillInputs={setSkillInputs}
      />

      <FormInput
        text="Add a skill category"
        placeholder={defaultForm.technicalSkills[0].category}
        name="category"
        handleChange={handleCategoryChange}
        value={skillInputs.category}
      />

      {skillInputs.category && (
        <div>
          <form onSubmit={addSkill}>
            <FormInput
              text={`Add a skill to ${skillInputs.category}`}
              placeholder={defaultForm.technicalSkills[0].skills[0]}
              name="skill"
            />
            <button type="submit">Add skill</button>
          </form>

          <ul>
            {skillInputs.skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <button onClick={() => deleteSkill(skill)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={(e) => {
          handleSubmit(e, skillInputs, "technicalSkills");
          resetData();
        }}
      >
        Submit Skills
      </button>
    </div>
  );
}

export default TechnicalSkills;
