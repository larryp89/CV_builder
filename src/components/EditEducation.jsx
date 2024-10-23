function EditEducation({ detailsForm, setDetailsForm, setEducationInputs }) {
  const repopulateForm = (id) => {
    const entryToEdit = detailsForm.education.find((entry) => entry.id === id);

    if (entryToEdit) {
      setEducationInputs({
        ...entryToEdit,
      });
    }
  };

  const deleteUniversity = (id) => {
    setDetailsForm((prevDetails) => ({
      ...prevDetails,
      education: prevDetails.education.filter((uni) => uni.id !== id),
    }));
    // Reset local state
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

  return (
    <ul>
      {detailsForm.education.map((entry) => (
        <li key={entry.id}>
          {entry.university}/{entry.degree}
          <button onClick={() => repopulateForm(entry.id)}>Edit</button>
          <button onClick={() => deleteUniversity(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EditEducation;