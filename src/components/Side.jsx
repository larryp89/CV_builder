import "../styles/Sidebar.css";
import PersonalDetails from "./PersonalDetails";
import ContactInfo from "./ContactInfo";
import Education from "./Education";

function Sidebar({ form, setForm, defaultForm }) {
  return (
    <div className="sidebar">
      <header className="header">
        <h1>Welcome to CV Builder</h1>
        <h3>
          Create your CV by filling out the form below. Your CV will be
          dynamically updated in the preview.
        </h3>
      </header>

      <PersonalDetails
        form={form}
        setForm={setForm}
        defaultForm={defaultForm}
      />
      <ContactInfo form={form} setForm={setForm} defaultForm={defaultForm} />
      <Education form={form} setForm={setForm} defaultForm={defaultForm} />
    </div>
  );
}

export default Sidebar;
