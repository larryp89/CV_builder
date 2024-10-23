import "../styles/TechnicalSkills.css";
function PrevTechnicalSkills({ detailsForm, defaultForm }) {
  return (
    <div className="preview__technical">
      <h3>Technical Skills</h3>
      {detailsForm.technicalSkills.length > 0
        ? detailsForm.technicalSkills.map((skill) => (
            <div key={skill.id}>
              <h4>{skill.category}</h4>
              <ul className="skills">
                {skill.skills.map((singleSkill, idx) => (
                  <li key={idx}>{singleSkill}</li>
                ))}
              </ul>
            </div>
          ))
        : defaultForm.technicalSkills.map((skill) => (
            <div key={skill.id}>
              <h4>{skill.category}</h4>
              <ul className="skills">
                {skill.skills.map((singleSkill, idx) => (
                  <li key={idx}>{singleSkill}</li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  );
}

export default PrevTechnicalSkills;
