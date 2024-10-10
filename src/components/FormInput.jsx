import "../styles/FormInput.css";

function FormInput({ text, Tag, type }) {
  return (
    <div className="form-input">
      <label htmlFor={text}>{text}</label>
      {Tag === "input" ? <Tag type={type} id={text} /> : <Tag id={text} />}
    </div>
  );
}

export default FormInput;
