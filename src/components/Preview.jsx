import "../styles/Preview.css";

function Preview({ form, defaultForm }) {
  return (
    <div className="preview">
      {/* PERSONAL DETAILS & CONTACT INFO SECTION */}
      <section className="preview__personal-details">
        <div className="details-left">
          <h2 className="preview__name">
            {`${form.firstName || defaultForm.firstName} ${
              form.lastName || defaultForm.lastName
            }`}
          </h2>
          <p className="preview__current-job">
            {form.currentJob || defaultForm.currentJob}
          </p>
          <p className="preview__personal-summary">
            {form.personalSummary || defaultForm.personalSummary}
          </p>
        </div>
        <div className="details-right">
          <div className="email-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <p className="preview__email">{form.email || defaultForm.email}</p>
          </div>
          <div className="phone-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>cellphone</title>
              <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
            </svg>
            <p className="preview__phone">
              {form.phoneNum || defaultForm.phoneNum}
            </p>
          </div>
          <div className="location-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>city</title>
              <path d="M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z" />
            </svg>
            <p className="preview__location">
              {form.location || defaultForm.location}
            </p>
          </div>
          <div className="website-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>web</title>
              <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <p className="preview__website">
              {form.website || defaultForm.website}
            </p>
          </div>
        </div>
      </section>
      {/* EDUCATION SECTION & TECHNICAL*/}
      <section className="preview__education">
        <p>Education Background</p>
        {/* Add educational details conditionally if needed */}
      </section>
    </div>
  );
}

export default Preview;
