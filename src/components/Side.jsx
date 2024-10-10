import "../styles/Sidebar.css";
import PersonalDetails from "./PersonalDetails";
import ContactInfo from "./ContactInfo";

function Sidebar() {
  return (
    <div className="sidebar">
      <PersonalDetails />
      <ContactInfo />
    </div>
  );
}

export default Sidebar;
