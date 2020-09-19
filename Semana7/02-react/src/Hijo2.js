import React from 'react'

export default function Hijo2(props) {
  console.log("props hijo2", props)
  return (
    <div>
      <button onClick={()=>{props.actualizar(1000)}}>Actualizar a 1000</button>
    </div>
  )
}
