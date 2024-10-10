import { useState } from "react";
import "../styles/App.css";
import Sidebar from "./Side";

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
      <Sidebar />
    </div>
  );
}

export default App;
