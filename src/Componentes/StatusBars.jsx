import React from "react";
import { nanoid } from "nanoid";

export default function StatusBars({ characterData }) {
  //Extraemos la informacion de characterData
  const stats = characterData.stats;

  //Si hay algun error, se mostraran alguno de los siguientes mensajes
  if (!characterData.noData) {
    switch (true) {
      case stats === undefined:
        throw Error("No se proporcionan datos estadísticos.");
      case typeof stats != "object" || Array.isArray(stats):
        throw Error("Datos estadísticos no válidos.");
      case stats.hp === undefined:
        throw Error("No se proporciona ningún valor de hp.");
      case stats.mp === undefined:
        throw Error("No se proporciona ningún valor de mp");
      case stats.resistencia === undefined:
        throw Error("No se proporciona ningún valor de resistencia.");
      case stats.hp > 100 || stats.hp < 0 || typeof stats.hp != "number":
        throw Error("Valor de hp no válido.");
      case stats.mp > 100 || stats.mp < 0 || typeof stats.mp != "number":
        throw Error("Valor de mp no válido.");
      case stats.resistencia > 100 ||
        stats.resistencia < 0 ||
        typeof stats.resistencia != "number":
        throw Error("Valor de resistencia no válido.");
    }
  }

  //Creamos un array statBarElements para almacenar los elementos de las barras de estado. Luego, se itera sobre cada estadística en stats y se crea un div para cada estadística.
  const statBarElements = [];

  for (let stat in stats) {
    statBarElements.push(
      <div className="indiv-stat-bar-wrapper" key={nanoid()}>
        <div className="indiv-stat-bar-container">
          <div
            className="stat-bar-fill"
            style={{
              width: `${stats[stat]}%`,
              background: stats[stat] < 50 ? "coral" : "lightgreen",
            }}
          >
            <span>{stats[stat]}</span>
          </div>
        </div>
        <div className="stat-name-container">{stat}</div>
      </div>
    );
  }

  //Renderizamos el componente
  return <div className="overall-status-bars-container">{statBarElements}</div>;
}
