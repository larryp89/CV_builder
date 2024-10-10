import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Side";
import Preview from "./Preview";

function App() {
  const [form, setForm] = useState({
    firstName: "Homer",
    lastName: "Simpson",
    currentJob: "Power Plant Worker",
    personalSummary:
      "I am a great man who does great things. The thing I am most proud of is sleeping on the job and no one even notices. Hell, even in a nuclear meltdown I was asleep! Screw your Burns!",
    email: "homer@foxtv.net",
    phoneNum: "411000",
    location: "Springfield",
    website: "thesimpsons.com",
  });

  return (
    <div className="app-container">
      <Sidebar form={form} setForm={setForm} />
      <Preview form={form} />
    </div>
  );
}

export default App;
