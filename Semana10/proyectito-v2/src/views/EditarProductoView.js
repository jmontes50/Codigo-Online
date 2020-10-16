import React, {useEffect, useState} from 'react'
import FormularioProductoEdit from "../components/FormularioProductoEdit";
import {obtenerProductoPorId, editarProducto} from "../services/productosService";
import Swal from 'sweetalert2';

export default function EditarProductoView(props) {

  const [producto, setProducto] = useState({})
  const productoId = props.match.params.id;

  useEffect(async ()=>{
    let productoObtenido = await obtenerProductoPorId(productoId);
    setProducto(productoObtenido)
  },[])

  const editProduct = async (objProducto, id) => {
    let peticionEditar = await editarProducto(objProducto, id)
    Swal.fire({
      icon:"success",
      title:"Exito!",
      text:"Producto Editado Exitosamente"
    })
  }

  return (
    <div>
      <h1>Crear Producto</h1>
      <FormularioProductoEdit producto={producto} editProduct={editProduct} textoBoton="Editar Producto"/>
    </div>
  )
} 
