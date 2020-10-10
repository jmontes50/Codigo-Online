import React from "react";

export default function Count({cantidadProductos, actualizarCantidad}) {

  const disminuirCantidad = () => {
    if(cantidadProductos === 1){
      return; //se corta esta función
    }
    actualizarCantidad(cantidadProductos - 1)
  }

  return (
    <div style={{ width: "300px", display: "flex", alignItems: "center" }}>
      <span className="text-bold">Cantidad: </span>
      <button className="btn btn-light btn-sm" onClick={()=>{disminuirCantidad()}}>
        <i className="fas fa-minus"></i>
      </button>
      <span className="mx-2">{cantidadProductos}</span>
      <button
        className="btn btn-light btn-sm"
        onClick={() => {
          actualizarCantidad(cantidadProductos + 1);
        }}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}
