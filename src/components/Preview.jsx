import "../styles/Preview.css";
import PrevPersonal from "./PrevPersonal";
import PrevContact from "./PrevContact";
import PrevEducation from "./PrevEducation";
import PrevWorkExp from "./PrevWorkExp";
import PrevTechnicalSkills from "./PreviewTechnicalSkills";
import PrevOtherSkills from "./PrevOtherSkills";

function Preview({ defaultForm, detailsForm }) {
  return (
    <div className="preview">
      <PrevPersonal detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevContact detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevEducation detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevTechnicalSkills
        detailsForm={detailsForm}
        defaultForm={defaultForm}
      />
      <PrevWorkExp detailsForm={detailsForm} defaultForm={defaultForm} />
      <PrevOtherSkills detailsForm={detailsForm} defaultForm={defaultForm} />
    </div>
  );
}

export default Preview;
