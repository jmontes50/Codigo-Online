import React from 'react';
import Child from './Child';
import Hijo from './Hijo';

export default function App() {
  let mifuncion = () => alert("funciiiiiiion!");
  let edad = 20;
  return (
    <div>
      Hola :D
      <hr/>
      <Child minombre="Daniel" miEdad={edad} laFuncion={mifuncion}/>
      <Hijo/>
    </div>
  )
}

