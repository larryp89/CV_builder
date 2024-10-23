import "../styles/Sidebar.css";
import PersonalDetails from "./PersonalDetails";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import TechnicalSkills from "./TechnicalSkills";
import OtherSkills from "./OtherSkills";

function Sidebar({
  defaultForm,
  detailsForm,
  handleDynamicChange,
  setDetailsForm,
  handleSubmit,
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
        detailsForm={detailsForm}
        setDetailsForm={setDetailsForm}
        handleSubmit={handleSubmit}
      />
      <WorkExperience
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        handleSubmit={handleSubmit}
        setDetailsForm={setDetailsForm}
      />
      <TechnicalSkills
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        handleSubmit={handleSubmit}
        setDetailsForm={setDetailsForm}
      />
      <OtherSkills
        defaultForm={defaultForm}
        detailsForm={detailsForm}
        handleSubmit={handleSubmit}
        setDetailsForm={setDetailsForm}
      />
    </div>
  );
}

export default Sidebar;
