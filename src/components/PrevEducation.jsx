import "../styles/Education.css"
function PrevEducation({ detailsForm, defaultForm }) {
  return (
    <section className="preview__education">
      <h3>Education Background</h3>
      <div className="preview__university">
        {/* If the education array is not zero in length */}
        {detailsForm.education.length > 0 ? (
          detailsForm.education.map((entry) => {
            return (
              <div key={entry.id}>
                <div className="title-date">
                  <p className="uni-name">{entry.university}</p>
                  <p className="uni-date">
                    {entry.startDate} -{" "}
                    {entry.ongoing ? "Present" : entry.endDate}
                  </p>
                </div>
                <p>{entry.degree}</p>
                {/* Render honors if any */}
                {entry.honors.length > 0 && (
                  <ul className="honors">
                    {entry.honors.map((honor, index) => (
                      <li key={index}>{honor.text}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        ) : (
          // Display default values if there is no education data
          <div>
            <div className="title-date">
              <p className="uni-name">{defaultForm.university}</p>
              <p className="uni-date">
                {defaultForm.startDate} - {defaultForm.endDate}
              </p>
            </div>
            <p>{defaultForm.degree}</p>
            {/* Render default honors if any */}
            {defaultForm.honors.length > 0 && (
              <ul className="honors">
                {defaultForm.honors.map((honor, index) => (
                  <li key={index}>{honor}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default PrevEducation;
