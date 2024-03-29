import "./name.css";

function Vehicule({ informations }) {
  const { marque, model, couleur, année } = informations;
  console.log(marque);
  return (
    <div className="name-card">
      <h1>
        {marque} {model} {couleur} {année}
      </h1>
    </div>
  );
}

export default Vehicule;
