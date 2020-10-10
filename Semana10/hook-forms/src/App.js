import React, { useState } from "react";
import Formulario from "./Formulario";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length === 0) {
      setError(true);
      return;
    }
    //demás código que pueda tener
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre completo"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        {error ? <p>Este campo es requerido</p> : null}
        <button type="submit">Enviar</button>
      </form>
      <hr />
      <Formulario />
    </div>
  );
}
