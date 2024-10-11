import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Side";
import Preview from "./Preview";

function App() {
  // Set up the form state with default values
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
  };

  const emptyForm = {
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
  };

  // Form state
  const [form, setForm] = useState(emptyForm);

  return (
    <div className="app-container">
      <Sidebar form={form} setForm={setForm} defaultForm={defaultForm} />
      <Preview form={form} defaultForm={defaultForm} />
    </div>
  );
}

export default App;
