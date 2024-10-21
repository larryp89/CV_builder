import "../styles/Sidebar.css";
import PersonalDetails from "./PersonalDetails";
import ContactInfo from "./ContactInfo";
import Education from "./Education";

function Sidebar({
  defaultForm,
  detailsForm,
  educationInputs,
  handleDynamicChange,
  handleEducationChange,
  handleEducationSubmit,
  setEducationInputs,
  setDetailsForm,
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
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        handleDynamicChange={handleDynamicChange}
      />
      <ContactInfo
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        handleDynamicChange={handleDynamicChange}
      />
      <Education
        defaultForm={defaultForm}
        educationInputs={educationInputs}
        handleEducationChange={handleEducationChange}
        handleEducationSubmit={handleEducationSubmit}
        setEducationInputs={setEducationInputs}
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
      />
      {/* <WorkExperience /> */}
    </div>
  );
}

export default Sidebar;
