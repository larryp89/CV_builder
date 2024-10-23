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
    <ul>
      {detailsForm.workExp.map((entry) => (
        <li key={entry.id}>
          {entry.title}/{entry.company}
          <button onClick={() => repopulateForm(entry.id)}>Edit</button>
          <button onClick={() => deleteWorkExp(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EditWorkExp;
