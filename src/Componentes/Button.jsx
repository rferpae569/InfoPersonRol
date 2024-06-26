import React from "react";
import attackOptionsList from "../data/attackOptionList";
import namesList from "../data/namesList";

export default function Button({ setCharacterData }) {
  //Esta función es llamada cuando se hace clic en el botón. La función setCharacterData se llama con una función de actualización que toma el estado anterior (prevData) y devuelve un nuevo estado.
  function toggle() {
    setCharacterData((prevData) => {
      //Se define una función genRanNum que toma un número máximo (max) y devuelve un número entero aleatorio entre 0 y max - 1.
      function genRanNum(max) {
        return Math.floor(Math.random() * max);
      }

      //La función flipCoin devuelve true o false.
      function flipCoin() {
        return genRanNum(100) < 50 ? true : false;
      }

      //La función getAttackOptions crea una copia de attackOptionsList, y luego genera una nueva lista de 6 opciones de ataque aleatorias. Usa un map para llenar la nueva lista con elementos seleccionados aleatoriamente de la lista copiada, asegurándose de no repetir elementos.
      function getAttackOptions() {
        let optionsListCopy = [...attackOptionsList];
        let newOptionsArray = new Array(6).fill("");
        return newOptionsArray.map((item) => {
          const randomIndex = genRanNum(optionsListCopy.length);
          const cachedName = optionsListCopy[randomIndex];
          optionsListCopy.splice(randomIndex, 1);
          return cachedName;
        });
      }

      //Se devuelve un objeto con los datos de los personajes
      return {
        hat: flipCoin() ? true : false,
        shield: flipCoin() ? true : false,
        weapon: flipCoin() ? "sword" : "staff",
        stats: {
          hp: genRanNum(100),
          mp: genRanNum(100),
          resistencia: genRanNum(100),
        },
        attackOptions: getAttackOptions(),
        name: namesList[genRanNum(namesList.length)],
      };
    });
  }
  return <button onClick={toggle}>Cambiar</button>;
}
