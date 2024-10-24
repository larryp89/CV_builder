import "../styles/WorkExperience.css";
function PrevWorkExp({ detailsForm, defaultForm }) {
  return (
    <section className="preview__work-exp">
      <h3>Work Experience</h3>
      {/* If the education array is not zero in length */}
      {detailsForm.workExp.length > 0 ? (
        detailsForm.workExp.map((entry) => {
          return (
            <div key={entry.id}>
              <div className="job-title-date">
                <p className="work-exp-title">{entry.title}</p>
                <p className="work-exp-date">
                  {entry.startDate} -{" "}
                  {entry.ongoing ? "Present" : entry.endDate}
                </p>
              </div>
              <p className="work-exp-company">{entry.company}</p>
              {/* Render responsibilities if any */}
              {entry.responsibilities.length > 0 && (
                <ul className="work-responsibility">
                  {entry.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility.text}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })
      ) : (
        // Display default values if there is no education data
        <div>
          <div className="job-title-date">
            <p className="work-exp-title">{defaultForm.title}</p>
            <p className="work-exp-date">
              {defaultForm.jobStartDate} - {defaultForm.jobEndDate}
            </p>
          </div>
          <p className="work-exp-company">{defaultForm.company}</p>
          {/* Render default honors if any */}
          {defaultForm.responsibilities.length > 0 && (
            <ul className="work-responsibility">
              {defaultForm.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}

export default PrevWorkExp;
