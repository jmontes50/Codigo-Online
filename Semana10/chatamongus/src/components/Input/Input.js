import React from 'react'
import './Input.css';

export default function Input({setMessage, sendMessage, message}) {

  return (
    <div className="Input">
      <input type="text"
      placeholder="Defiendete tu no eres el impostor... Creo"
      value={message}
      onChange={(e)=>{setMessage(e.target.value)}}/>
      <button className="btn-amongus" onClick={(e)=>{sendMessage(message)}}>Enviar</button>
    </div>
  )
}
