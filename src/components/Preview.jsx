import "../styles/Preview.css";
import PrevPersonal from "./PrevPersonal";
import PrevContact from "./PrevContact";
import PrevEducation from "./PrevEducation";
import PrevWorkExp from "./PrevWorkExp";
import PrevTechnicalSkills from "./PreviewTechnicalSkills";
import PrevOtherSkills from "./PrevOtherSkills";
import html2pdf from "html2pdf.js";

function Preview({ defaultForm, detailsForm }) {
  const saveAsPDF = () => {
    const element = document.getElementById("preview-section"); // Target the preview section
    html2pdf().from(element).save(); // Generate the PDF
  };

  return (
    <>
      <button className="button save-form" onClick={saveAsPDF}>
        Save as PDF
      </button>
      <div id="preview-section" className="preview">
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
    </>
  );
}

export default Preview;
