function EditWorkExp({ detailsForm, setDetailsForm, setWorkExpInputs }) {
  const repopulateForm = (id) => {
    const entryToEdit = detailsForm.workExp.find((entry) => entry.id === id);

    if (entryToEdit) {
      // If there's an entry, spread it and set state with it
      setWorkExpInputs({
        ...entryToEdit,
      });
    }
  };

  const deleteWorkExp = (id) => {
    setDetailsForm((prevDetails) => ({
      ...prevDetails,
      workExp: prevDetails.workExp.filter((job) => job.id !== id),
    }));
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

  return (
    <ul className="edit-submission">
      {detailsForm.workExp.map((entry) => (
        <li key={entry.id}>
          {entry.title}/{entry.company}
          <div className="buttons">
            <button
              className="button edit-button"
              onClick={() => repopulateForm(entry.id)}
            >
              Edit
            </button>
            <button
              className="button edit-button"
              onClick={() => deleteWorkExp(entry.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EditWorkExp;
