import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="login">
      <div>
        <h2>Nombre</h2>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <h2>Sala</h2>
        <input
          type="text"
          placeholder="Ingrese el código de la sala"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
      </div>
      <Link className="btn-amongus" to={`/Chat?name=${name}&room=${room}`}>
        INGRESAR
      </Link>
    </div>
  );
}
