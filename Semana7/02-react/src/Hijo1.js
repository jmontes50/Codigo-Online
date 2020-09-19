import React from 'react'

export default function Hijo1(props) {
  console.log("Hijo1",props)
  
  let alumnos = [
    {
      edad:20,
      nombre:"Diana",
    },
    {
      edad:29,
      nombre:"Deya",
    },
    {
      edad:29,
      nombre:"Duilio",
    }
  ]

  return (
    <div>
      <h4>Yo soy Hijo 1</h4>
      <p>{props.miNumero}</p>

      {/* renderizado condicional */}
      {props.miNumero >= 1000 ? (<div> el número es muy grande </div>) : (<div>El número es chiquito</div>)}

      {/* iterando arreglos y convirtiendolos en componentes */}
      {alumnos.map((elemento, indice) => {
        return (
        <div key={indice}>
          <h4>{elemento.nombre}</h4>
          <p>Edad: {elemento.edad}</p>
        </div>
        )
      })}

    </div>
  )
}
