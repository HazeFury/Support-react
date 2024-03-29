import { useState } from "react";
import "./App.css";

function App() {
  // ETAPE 1 : j'initialise mes states avec une valeur par défaut
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [switchMode, setSwitchMode] = useState(false);

  console.log(switchMode);

  // ETAPE 2 : je crée les fonctions pour modifier la valeur de mes states (AVEC LE SETTER (ex : setCount))
  const handleAdd = () => {
    setCount(count + 1);
  };
  // function handleAdd() {
  //   setCount(count + 1);
  // }
  const handleEditText = (e) => {
    setText(e.target.value);
  };
  const handleSwitch = () => {
    setSwitchMode(!switchMode);
  };

  return (
    <div className="container">
      {/* ETAPE 3 : je les affiche */}
      <h1>{count}</h1>
      <p>{text}</p>
      {/* ETAPE 4 : dans la propriété onClick ou onChange, j'appelle la fonction correspondante  */}
      <button onClick={handleAdd}>ajouter 1</button>
      <input type="text" value={text} onChange={handleEditText} />
      <button onClick={handleSwitch}>switcher entre true et false</button>
    </div>
  );
}

export default App;
