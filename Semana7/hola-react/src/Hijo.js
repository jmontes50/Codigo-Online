import React, {useState, useEffect} from 'react'

export default function Hijo() {
  const [nombre, setNombre] = useState('Paloma')
  const [numero, setNumero] = useState(0)

  useEffect(()=>{
    console.log("Petición!!!")
    //para hacer un fetch, y que despues de recibir los datos actualice el estado
  },[])

  useEffect(()=>{
    console.log(numero)
  },[numero])

  return (
    <div>
      Hola soy un Hijo Funcional
      <input type="text" value={nombre} onChange={(ev)=>{setNombre(ev.target.value)}}></input>
      <input type="number" value={numero} onChange={(ev)=>{setNumero(ev.target.value)}}/>
    </div>
  )
}
