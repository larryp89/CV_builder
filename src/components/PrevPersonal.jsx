import "../styles/PersonalDetails.css";

function PreviewPersonal({ detailsForm, defaultForm }) {
  return (
    <section className="preview__personal-details">
      <h2 className="preview__name">
        {`${detailsForm.firstName || defaultForm.firstName} ${
          detailsForm.lastName || defaultForm.lastName
        }`}
      </h2>
      <p className="preview__current-job">
        {detailsForm.currentJob || defaultForm.currentJob}
      </p>
      <p className="preview__personal-summary">
        {detailsForm.personalSummary || defaultForm.personalSummary}
      </p>
    </section>
  );
}

export default PreviewPersonal;
