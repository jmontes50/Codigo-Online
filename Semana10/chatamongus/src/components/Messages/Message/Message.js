import React, {Fragment} from 'react'

export default function Message({message: {text, user}, name}) {

  let esElUsuarioActual = false;

  const usuarioSinEspacios = name.trim().toLowerCase();

  if(user === usuarioSinEspacios){
    esElUsuarioActual = true;
  }

  return (
    <Fragment>
      {esElUsuarioActual ? (
        <div className="messageContainer end">
          <p>{usuarioSinEspacios}</p>
          <div className="messageBox">
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer start">
          <p>{usuarioSinEspacios}</p>
          <div className="messageBox">
            <p>{text}</p>
          </div>
        </div>
      )}
    </Fragment>
      
    
  )
}
