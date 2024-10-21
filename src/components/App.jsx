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
    // These update dynamically on input change
    firstName: "",
    lastName: "",
    currentJob: "",
    personalSummary: "",
    email: "",
    phoneNum: "",
    location: "",
    website: "",
    // These update on button click
    education: [],
    workExp: [],
    technicalSkills: [],
    otherInfo: [],
  });

  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [otherInfo, setOtherInfo] = useState([]);

  // Update the form directly from the respective inputs
  const handleDynamicChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetailsForm((prevDetails) => ({
      // Spread the previous form object
      ...prevDetails,
      // Use computed value of name and update it with the value, i.e. in the form input
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Generic handler for non-dynamic button submit
  const handleSubmit = (e, inputs, stateKey) => {
    e.preventDefault();
    // If there is an ID
    if (inputs.id) {
      // Update existing entry using previous details and update specific key with
      setDetailsForm((prevDetails) => ({
        // Spread the previous details and for the key, map
        ...prevDetails,
        [stateKey]: prevDetails[stateKey].map((item) =>
          item.id === inputs.id ? { ...inputs } : item
        ),
      }));
    } else {
      // Add new entry
      const newEntry = { ...inputs, id: uuid() };
      setDetailsForm((prevDetails) => ({
        ...prevDetails,
        [stateKey]: [...prevDetails[stateKey], newEntry],
      }));
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        handleDynamicChange={handleDynamicChange}
        handleSubmit={handleSubmit}
      />
      <Preview defaultForm={defaultForm} detailsForm={detailsForm} />
    </div>
  );
}

export default App;
