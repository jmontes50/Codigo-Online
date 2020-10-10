import React from 'react'
import FormularioProducto from "../components/FomularioProducto";
import {crearProducto} from "../services/productosService";
import Swal from 'sweetalert2';

export default function CrearProductoView() {

  const createProduct = async (objProducto) => {
    let peticion = await crearProducto(objProducto);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Producto Creado',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }

  return (
    <div>
      <h1>Crear Producto</h1>
      <FormularioProducto createProduct={createProduct} textoBoton="Crear Producto"/>
    </div>
  )
}
