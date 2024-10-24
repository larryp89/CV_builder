function EditTechnicalSkills({ detailsForm, setDetailsForm, setSkillInputs }) {
  const repopulateForm = (id) => {
    const entryToEdit = detailsForm.technicalSkills.find(
      (entry) => entry.id === id
    );

    if (entryToEdit) {
      setSkillInputs({
        ...entryToEdit,
      });
    }
  };

  const deleteCategory = (id) => {
    setDetailsForm((prevDetails) => ({
      ...prevDetails,
      technicalSkills: prevDetails.technicalSkills.filter(
        (cat) => cat.id !== id
      ),
    }));

    setSkillInputs({
      id: null,
      category: "",
      skills: [],
    });
  };

  return (
    <ul className="edit-submission">
      {detailsForm.technicalSkills.map((entry) => (
        <li key={entry.id}>
          {entry.category} ({entry.skills.join(", ")})
          <div className="buttons">
            <button
              className="button edit-button"
              onClick={() => repopulateForm(entry.id)}
            >
              Edit
            </button>
            <button
              className="button edit-button"
              onClick={() => deleteCategory(entry.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EditTechnicalSkills;
