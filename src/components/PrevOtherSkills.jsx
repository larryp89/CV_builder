import "../styles/OtherSkills.css"
function PrevOtherSkills({ detailsForm, defaultForm }) {
  return (
    <div className="preview__other">
      <h3>Other Skills</h3>
      {detailsForm.otherSkills.length > 0
        ? detailsForm.otherSkills.map((skill) => (
            <div key={skill.id}>
              <h4>{skill.category}</h4>
              <ul className="preview__other-skills-list">
                {skill.skills.map((singleSkill, idx) => (
                  <li key={idx}>{singleSkill}</li>
                ))}
              </ul>
            </div>
          ))
        : defaultForm.otherSkills.map((skill) => (
            <div key={skill.id}>
              <h4>{skill.category}</h4>
              <ul className="preview__other-skills-list">
                {skill.skills.map((singleSkill, idx) => (
                  <li key={idx}>{singleSkill}</li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  );
}

export default PrevOtherSkills;
