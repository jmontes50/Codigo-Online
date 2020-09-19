import React from 'react'
import './css/Tarjeta.css';

export default function Tarjeta() {
  return (
    <div>
      <div class="tarjeta">
        <img src="https://picsum.photos/200/300" />
        <div class="tarjeta-cuerpo">
          <h3 class="tarjeta-titulo">
            Producto1
          </h3>
          <p>
            Precio: $ 50
          </p>
        </div>
      </div>
    </div>
  )
}
