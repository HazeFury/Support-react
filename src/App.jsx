import Name from "./components/Name";
import Vehicule from "./components/vehicule";
import "./App.css";

function App() {
  const vehicules = [
    {
      marque: "BMW",
      model: "M5",
      couleur: "gris",
      année: "2024",
    },
    {
      marque: "Audi",
      model: "RS6",
      couleur: "blanche",
      année: "2023",
    },
    {
      marque: "Mercedes",
      model: "Classe AMG",
      couleur: "blanc",
      année: "2022",
    },
  ];

  return (
    <div>
      {vehicules.map((vehicule) => (
        <Vehicule informations={vehicule} />
      ))}
    </div>
  );
}

export default App;
