import "../styles/Sidebar.css";
import PersonalDetails from "./PersonalDetails";
import ContactInfo from "./ContactInfo";

function Sidebar({ form, setForm }) {
  return (
    <div className="sidebar">
      <PersonalDetails form={form} setForm={setForm} />
      {/* <ContactInfo form={form} setForm={setForm} /> */}
    </div>
  );
}

export default Sidebar;
