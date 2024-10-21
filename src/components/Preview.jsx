import "../styles/Preview.css";
import PrevPersonal from "./PrevPersonal";
import PrevEducation from "./PrevEducation";
import PrevWorkExp from "./PrevWorkExp";

function Preview({ defaultForm, detailsForm }) {
  return (
    <div className="preview">
      <PrevPersonal detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevEducation detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevWorkExp detailsForm={detailsForm} defaultForm={defaultForm} />
    </div>
  );
}

export default Preview;
