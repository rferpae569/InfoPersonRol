import React from "react";
import { nanoid } from "nanoid";

export default function Options({ characterData }) {
  //Se extraen las attackOptions del objeto characterData.
  const attackOptions = characterData.attackOptions;

  //Si hay algun error, se mostraron algunos de los siguientes errores
  if (attackOptions === undefined) {
    throw Error("Datos de habilidades no proporcionados.");
  }

  if (!Array.isArray(attackOptions)) {
    throw Error("Tipo de datos proporcionado a las opciones no valido.");
  }

  if (
    attackOptions.filter(
      (item) => typeof item !== "string" || item.trim().length === 0
    ).length > 0
  ) {
    throw Error(
      "Entradas no válidas en la matriz proporcionada a las opciones."
    );
  }

  if (attackOptions.length !== 6) {
    throw Error("¡Número de habilidades no válido!");
  }

  //Se mapean las attackOptions a elementos de lista. Cada elemento de la lista recibe una clase option y una clave (key) única generada por nanoid.
  const options = attackOptions.map((option) => {
    return (
      <li className="option" key={nanoid()}>
        {option}
      </li>
    );
  });

  //Dividimos las opciones en dos grupos, tres elementos cada uno
  const optionsGroupOne = options.slice(0, 3);
  const optionsGroupTwo = options.slice(3, 6);

  //Renderizamos el componente
  return (
    <div className="options-container">
      <h3>Opciones de Ataque</h3>
      <div>
        <ul>{optionsGroupOne}</ul>

        <ul>{optionsGroupTwo}</ul>
      </div>
    </div>
  );
}
