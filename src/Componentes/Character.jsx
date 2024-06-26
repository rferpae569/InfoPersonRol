import React from "react";
export default function Character({ characterData }) {
  //En caso de que haya algun error con los datos, saldra alguno de los siguientes errores.
  if (!characterData.noData) {
    switch (true) {
      case characterData.hat === undefined:
        throw Error("No se proporciona valor de sombrero.");
      case characterData.shield === undefined:
        throw Error("No se proporciona ningún valor de escudo.");
      case characterData.weapon === undefined:
        throw Error("No se proporciona valor de arma");
      case characterData.name === undefined:
        throw Error("No se proporcionó ningún valor de nombre.");
      case typeof characterData.name !== "string":
        throw Error("Valor de nombre no válido.");
      case characterData.name.trim().length < 2:
        throw Error("Longitud de nombre no válida.");
      case typeof characterData.hat !== "boolean":
        throw Error("Valor de sombrero no válido.");
      case typeof characterData.shield !== "boolean":
        throw Error("Valor de escudo no válido.");
      case characterData.weapon !== "sword" && characterData.weapon !== "staff":
        throw Error("Valor de arma no válido.");
    }
  }

  //Creamos las variables basadas en los valores establecidos
  const hat = characterData.hat ? "hat" : "noHat";
  const shield = characterData.shield ? "shield" : "noShield";
  const weapon = characterData.weapon;

  //Determinamos la imagen del personaje
  const CharacterImageUrl = characterData.noData
    ? null
    : "../../imagenes/" + hat + "-" + shield + "-" + weapon + ".png";

  //Renderizamos el componente
  return (
    <div className="character-container">
      <img src={CharacterImageUrl} />
      <div className="character-name">{characterData.name}</div>
    </div>
  );
}
