import React, {useState} from 'react'
import Hijo1 from './Hijo1';
import Hijo2 from "./Hijo2";

export default function App() {

  const [numero, setNumero] = useState(10);

  const actualizarNumero = (num) => {
    setNumero(num);
  }

  return (
    <div>
      Mi número es <strong>{numero}</strong>
      <Hijo1 miNumero={numero}/>
      <Hijo2 actualizar={actualizarNumero}/>
    </div>
  )
}
