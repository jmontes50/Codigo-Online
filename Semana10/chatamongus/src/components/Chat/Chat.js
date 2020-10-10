import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import './Chat.css';

// const ENDPOINT = 'https://chatamongus.herokuapp.com/';
const ENDPOINT = "localhost:5000";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([])

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

  useEffect(()=>{
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    })
  }, [])

  const sendMessage = (mensaje) => {
    if (mensaje.trim() !== "") {
      socket.emit("sendMessage", mensaje, () => {});
    }
  };

  return (
    <div className="chat">
      <div className="containerchat">
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  );
}
