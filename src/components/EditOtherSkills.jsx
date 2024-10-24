function EditOtherSkills({ detailsForm, setDetailsForm, setSkillInputs }) {
  const repopulateForm = (id) => {
    const entryToEdit = detailsForm.otherSkills.find(
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
      otherSkills: prevDetails.otherSkills.filter((cat) => cat.id !== id),
    }));

    setSkillInputs({
      id: null,
      category: "",
      skills: [],
    });
  };

  return (
    <ul className="edit-submission">
      {detailsForm.otherSkills.map((entry) => (
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

export default EditOtherSkills;
