import { useState } from "react";
import "../styles/App.css";
import { v4 as uuid } from "uuid";
import Sidebar from "./Sidebar";
import Preview from "./Preview";

function App() {
  // Default values for placeholder in some form elements & for other values in the preview until click
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
    honors: [
      "Awards: Down a pint 1.8 seconds, Slept for 45 hours straight",
      "Organisaitons: Beer society",
    ],
    title: "Meltdown Specialist",
    company: "Springfield Power Plant",
    jobStartDate: "03/01/1999",
    jobEndDate: "04/01/1999",
    jobOngoing: false,
    responsibilities: [
      "Talking to Lenny and Carl",
      "Drinking beers",
      "Endangering lives",
    ],
  };

  // State for all form data
  const [detailsForm, setDetailsForm] = useState({
    firstName: "",
    lastName: "",
    currentJob: "",
    personalSummary: "",
    email: "",
    phoneNum: "",
    location: "",
    website: "",
    education: [],
    jobs: [],
    technicalSkills: [],
  });

  const [educationInputs, setEducationInputs] = useState({
    id: null,
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    honors: [],
  });

  const [JobInputs, setJobInputs] = useState({
    id: null,
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    responsibilities: [],
  });

  // Handle dynamic updates for basic and contact information
  const handleDynamicChange = (e) => {
    // Deconstruct from the event object
    const { name, value, type, checked } = e.target;
    setDetailsForm((prevDetails) => ({
      // Spread the previous form object
      ...prevDetails,
      // Use computed value of name and update it with the value, i.e. in the form input
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEducationChange = (e) => {
    // Update education inputs as above
    const { name, value, type, checked } = e.target;
    setEducationInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    if (educationInputs.id) {
      // Update existing education entry
      setDetailsForm((prevDetails) => ({
        ...prevDetails,
        education: prevDetails.education.map((edu) =>
          edu.id === educationInputs.id ? { ...educationInputs } : edu
        ),
      }));
    } else {
      // Add new education entry
      const newEducation = {
        ...educationInputs,
        id: uuid(),
      };
      setDetailsForm((prevDetails) => ({
        ...prevDetails,
        education: [...prevDetails.education, newEducation],
      }));
    }

    // Reset education inputs
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
    <div className="app-container">
      <Sidebar
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        educationInputs={educationInputs}
        handleDynamicChange={handleDynamicChange}
        handleEducationChange={handleEducationChange}
        handleEducationSubmit={handleEducationSubmit}
        setEducationInputs={setEducationInputs}
      />
      <Preview defaultForm={defaultForm} detailsForm={detailsForm} />
    </div>
  );
}

export default App;
