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

  //   const deleteUniversity = (id) => {
  //     setDetailsForm((prevDetails) => ({
  //       ...prevDetails,
  //       education: prevDetails.education.filter((uni) => uni.id !== id),
  //     }));
  //     setEducationInputs({
  //       id: null, // Reset id to null
  //       university: "",
  //       degree: "",
  //       startDate: "",
  //       endDate: "",
  //       ongoing: false,
  //       honors: [],
  //     });
  //   };

  return (
    <ul>
      {detailsForm.workExp.map((entry) => (
        <li key={entry.id}>
          {entry.title}/{entry.company}
          <button onClick={() => repopulateForm(entry.id)}>Edit</button>
          {/* <button onClick={() => deleteUniversity(entry.id)}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
}

export default EditWorkExp;
