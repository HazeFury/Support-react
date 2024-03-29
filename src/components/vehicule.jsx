import "./name.css";

function Vehicule({ informations }) {
  // Je déstrucuture mon objet en utilisant les accolades
  // (afin de gagner en lisibilité(ce qui évite de devoir utiliser information.marque, information.model, etc))
  const { marque, model, couleur, année } = informations;

  return (
    <div className="name-card">
      <h1>
        {marque} {model} {couleur} {année}
      </h1>
    </div>
  );
}

export default Vehicule;
