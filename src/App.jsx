import React from "react";
import noCharacter from "./Utilities/noCharacter";
import Character from "./Componentes/Character";
import StatusBars from "./Componentes/StatusBars";
import Options from "./Componentes/Options";
import Button from "./Componentes/Button";
import attackOptionList from "./data/attackOptionList";
import namesList from "./data/namesList";
import "./App.css";

function App() {
  // Define el estado inicial del componente usando useState
  const [characterData, setCharacterData] = React.useState({
    hat: false, // El personaje no tiene sombrero
    shield: false, // El personaje no tiene escudo
    weapon: "sword", // El personaje tiene una espada como arma
    name: namesList[7], // El nombre del personaje es el octavo en la lista de nombres
    attackOptions: attackOptionList.slice(0, 6), // Las opciones de ataque son las primeras seis de la lista
    stats: {
      hp: 40, // El personaje tiene 40 puntos de salud
      mp: 100, // El personaje tiene 100 puntos de magia
      resistencia: 100, // El personaje tiene 100 puntos de resistencia
    },
  });

  let dataToUse, functionToUse;
  // Intenta asignar characterData a dataToUse, o usa noCharacter.noData si ocurre un error
  try {
    if (characterData) {
      dataToUse = characterData;
    }
  } catch {
    dataToUse = noCharacter.noData;
  }

  // Intenta asignar setCharacterData a functionToUse, o usa noCharacter.noFunction si ocurre un error
  try {
    if (setCharacterData) {
      functionToUse = setCharacterData;
    }
  } catch {
    functionToUse = noCharacter.noFunction;
  }

  //Renderizamos todos los componentes
  return (
    <div className="wrapper">
      <StatusBars characterData={dataToUse} />
      <Character characterData={dataToUse} />
      <Options characterData={dataToUse} />
      <Button setCharacterData={functionToUse} />
    </div>
  );
}

export default App;
