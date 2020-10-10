import React from 'react'
import Tarjeta from './Tarjeta';

export default function Tarjetas({productos}) {

  return (
    <div className="row">
      {
        productos.map((prod, i) => (
          <Tarjeta producto={prod} key={i}/>
        ))
      }
    </div>
  )
}
