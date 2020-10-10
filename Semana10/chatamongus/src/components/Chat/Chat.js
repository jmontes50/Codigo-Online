import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// const ENDPOINT = 'https://chatamongus.herokuapp.com/';
const ENDPOINT = "localhost:5000";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }, [ENDPOINT, location.search]);

  const sendMessage = (mensaje) => {
    if (mensaje.trim() !== "") {
      socket.emit("sendMessage", mensaje, () => {});
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sendMessage(message);
        }}
      >
        Enviar
      </button>
    </div>
  );
}
