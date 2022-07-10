import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeALert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo un cambio!</p>
        <button onClick={ () => toggleShow()}>Volver a cargar la informacion</button>
      </div>
    );
  }
  return null;
}

const ChangeALertWirhStirageListener = withStorageListener(ChangeALert);

export { ChangeALertWirhStirageListener };
