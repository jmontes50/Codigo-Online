import React from 'react'
import FormularioProducto from "../components/FomularioProducto";
import {crearProducto} from "../services/productosService";

export default function CrearProductoView() {

  const createProduct = async (objProducto) => {
    let peticion = await crearProducto(objProducto);
    console.log(peticion)
  }

  return (
    <div>
      <h1>Crear Producto</h1>
      <FormularioProducto createProduct={createProduct} textoBoton="Crear Producto"/>
    </div>
  )
}
