import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Side";
import Preview from "./Preview";

function App() {
  // Default values for placeholder
  const defaultForm = {
    firstName: "Homer",
    lastName: "Simpson",
    currentJob: "Power Plant Worker",
    personalSummary:
      "I am a great man who does great things. The thing I am most proud of is sleeping on the job and no one even notices. Hell, even in a nuclear meltdown I was asleep! Screw your Burns!",
    email: "homer@foxtv.net",
    phoneNum: "411000",
    location: "Springfield",
    website: "thesimpsons.com",
    university: "University of Springfield",
    degree: "Nuclear Science",
    startDate: "01/01/1999",
    endDate: "02/01/1999",
    ongoing: false,
  };

  // Single state for all form data
  const [detailsForm, setDetailsForm] = useState({
    firstName: "",
    lastName: "",
    currentJob: "",
    personalSummary: "",
    email: "",
    phoneNum: "",
    location: "",
    website: "",
    university: "",
    degree: "",
    startDate: "",
    ongoing: false,
    endDate: "",
    honors: "",
  });

  // Function to handle education form submission
  const handleEducationSubmit = (newEducation) => {
    setDetailsForm((prevForm) => ({
      ...prevForm,
      ...newEducation,
    }));
  };

  return (
    <div className="app-container">
      <Sidebar
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        handleEducationSubmit={handleEducationSubmit}
        defaultForm={defaultForm}
      />
      <Preview detailsForm={detailsForm} defaultForm={defaultForm} />
    </div>
  );
}

export default App;
