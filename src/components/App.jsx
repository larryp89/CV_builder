import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Side";
import Preview from "./Preview";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    currentJob: "",
    personalSummary: "",
    email: "",
    phoneNum: "",
    location: "",
    website: "",
  });

  return (
    <div className="app-container">
      <Sidebar form={form} setForm={setForm} />
      <Preview form={form} />
    </div>
  );
}

export default App;
