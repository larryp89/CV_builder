function PrevWorkExp({ detailsForm, defaultForm }) {
  return (
    <section className="preview__work-exp">
      <h3>Work Experience</h3>
      <div className="">
        <div className="">
          {/* If the education array is not zero in length */}
          {detailsForm.workExp.length > 0 ? (
            detailsForm.workExp.map((entry) => {
              return (
                <div key={entry.id}>
                  <div className="">
                    <p className="">{entry.title}</p>
                    <p className="">{entry.company}</p>
                    <p className="uni-date">
                      {entry.startDate} -{" "}
                      {entry.ongoing ? "Present" : entry.endDate}
                    </p>
                  </div>
                  {/* Render responsibilities if any */}
                  {entry.responsibilities.length > 0 && (
                    <ul>
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
              <div className="">
                <p className="uni-name">{defaultForm.title}</p>
                <p className="uni-name">{defaultForm.company}</p>
                <p className="uni-date">
                  {defaultForm.startDate} - {defaultForm.endDate}
                </p>
              </div>
              {/* Render default honors if any */}
              {defaultForm.responsibilities.length > 0 && (
                <ul>
                  {defaultForm.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PrevWorkExp;
