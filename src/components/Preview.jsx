import "../styles/Preview.css";
import PrevPersonal from "./PrevPersonal";
import PrevEducation from "./PrevEducation";

function Preview({ detailsForm, defaultForm }) {
  return (
    <div className="preview">
      <PrevPersonal detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevEducation detailsForm={detailsForm} defaultForm={defaultForm} />
    </div>
  );
}

export default Preview;
