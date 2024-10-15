function PrevEducation({ detailsForm, defaultForm }) {
  return (
    <section className="preview__education">
      <h3>Education Background</h3>
      <div className="uni-container">
        <p className="preview__university">
          {detailsForm.university || defaultForm.university}
        </p>
        <p>{detailsForm.degree || defaultForm.degree}</p>
        {/* If it's not ongoing, show start date end date */}
        {!detailsForm.ongoing ? (
          <p>
            {detailsForm.startDate || defaultForm.startDate} -{" "}
            {detailsForm.endDate || defaultForm.endDate}
          </p>
        ) : (
          <p>{detailsForm.startDate || defaultForm.startDate}</p>
        )}

        {/* else just show start date */}
      </div>
    </section>
  );
}

export default PrevEducation;
