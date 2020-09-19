import React from 'react'
import {Link} from 'react-router-dom';

export default function Tarjeta({producto}) {
  // console.log("tarjeta",props)
  return (
    <div className="col-12 col-lg-6 col-xl-3">
      <div className="card">
        <img src={producto.producto_imagen} className="card-img-top"/>
        <div className="card-body">
          <h3 className="card-title">
            {producto.producto_nombre}
          </h3>
          <p className="card-text">
            Precio: {producto.producto_precio}
          </p>
          <Link className="btn btn-primary btn-sm" to={`/detalle/${producto.producto_id}`}>Detalle</Link>
        </div>
      </div>
    </div>
  )
}
