import "./name.css";

function Name({ firstname, lastname }) {
  return (
    <div className="name-card">
      <h1>
        {firstname} {lastname}
      </h1>
    </div>
  );
}

export default Name;
