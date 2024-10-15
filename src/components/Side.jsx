import "../styles/Sidebar.css";
import PersonalDetails from "./PersonalDetails";
import ContactInfo from "./ContactInfo";
import Education from "./Education";

function Sidebar({
  detailsForm,
  setDetailsForm,
  defaultForm,
  handleEducationSubmit,
}) {
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
        form={detailsForm}
        setForm={setDetailsForm}
        defaultForm={defaultForm}
      />
      <ContactInfo
        form={detailsForm}
        setForm={setDetailsForm}
        defaultForm={defaultForm}
      />

      <Education
        form={detailsForm}
        setForm={handleEducationSubmit}
        defaultForm={defaultForm}
      />
    </div>
  );
}

export default Sidebar;
