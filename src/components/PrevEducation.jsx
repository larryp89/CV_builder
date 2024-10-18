function PrevEducation({ detailsForm, defaultForm }) {
  return (
    <section className="preview__education">
      <h3>Education Background</h3>
      <div className="uni-container">
        <div className="preview__university">
          <div className="uni-container">
            <p>{detailsForm.university || defaultForm.university}</p>
            <p>{detailsForm.degree || defaultForm.degree}</p>
            <p>{detailsForm.startDate || defaultForm.startDate}</p>
            <p>{detailsForm.endDate || defaultForm.endDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrevEducation;
