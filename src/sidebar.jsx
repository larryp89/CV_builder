import "./App.css";

function Heading() {
  return (
    <>
      <h1 className="heading">Welcome to CV builder.</h1>
      <h2>Create your CV by filling out the form below.</h2>
    </>
  );
}

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <Heading />
        <BasicInfo />
      </section>
    </>
  );
}

function BasicInfo() {
  return <h1 className="basicInfo">Basic Info</h1>;
}

export default Sidebar;
