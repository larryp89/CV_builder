import { useState } from "react";
import "../styles/App.css";
import { v4 as uuid } from "uuid";
import Sidebar from "./Sidebar";
import Preview from "./Preview";
import { useEffect } from "react";

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
      "Responsibility 1: Talking to Lenny and Carl",
      "Responsibility 2: Drinking beers",
      "Responsibility 3: Endangering lives",
    ],
    technicalSkills: [
      { id: 1, category: "Programming", skills: ["F", "F+", "F++"] },
    ],
    otherSkills: [{ id: 1, category: "Languages", skills: ["French"] }],
  };

  // State for all form data
  const [detailsForm, setDetailsForm] = useState(() => {
    // Check if localStorage has saved form data
    const storedForm = JSON.parse(localStorage.getItem("detailsForm"));
    // If data exists, use it; otherwise, return the default empty form data
    return (
      storedForm || {
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
        education: [], //{id:, university:, degree:, startDate:, endDate:, ongoing:, honors:[]} honor(object with ID & text)
        workExp: [], //{id:, title:, company:, startDate:, ongoing:, endDate:, resopnsibilities:[]} responsibility(obejct with ID & text)
        technicalSkills: [], //{id: skill:, attributes:[] } attribute(object with ID & text)
        otherSkills: [], // As above
      }
    );
  });

  // Set local storage
  useEffect(() => {
    localStorage.setItem("detailsForm", JSON.stringify(detailsForm));
  }, [detailsForm]);

  // Generic handler for udpating dynamically
  const handleDynamicChange = (e) => {
    const { name, value, type, checked } = e.target; //e.target is the target input event
    setDetailsForm((prevDetails) => ({
      // Spread the previous form object
      ...prevDetails,
      // Use computed value of name (matches detailsForm key) and update it with the value, i.e. from the form input
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Generic handler for non-dynamic button submit
  const handleSubmit = (e, inputs, stateKey) => {
    // inputs (the object to insert into detailsForm), stateKey(the detailsForm key)
    e.preventDefault();

    if (inputs.id) {
      setDetailsForm((prevDetails) => ({
        ...prevDetails,
        [stateKey]: prevDetails[stateKey].map((item) =>
          item.id === inputs.id ? { ...inputs } : item
        ),
      }));
    } else {
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
