import React, { useState, useEffect } from "react";
import { subirImagen } from "../services/productosService";
import {storage} from '../config/firebase';

let imagenProducto;

export default function FomularioProducto({createProduct, textoBoton}) {
  const [value, setValue] = useState({
    producto_nombre: "",
    producto_descripcion: "",
    producto_precio: 0,
    producto_stock: 0,
    producto_imagen:""
  });

  const actualizarInput = (e) => {
    // console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0];
    // console.log(miImagen);
    imagenProducto = miImagen;
  }

  const manejarSubmit = (e) => {
    e.preventDefault(); //corto el evento predeterminado del submit del formulario
    const refStorage = storage.ref(`productos/${imagenProducto.name}`);
    subirImagen(imagenProducto,refStorage)
    .then(urlImagen => {
      console.log(urlImagen)
      // setValue({...value, producto_imagen:urlImagen})
      //despues de que ya subi mi imagen
      createProduct({...value, producto_imagen:urlImagen}); //mando a crear el Producto
    })
    
  }

  return (
    <form onSubmit={(e) => {manejarSubmit(e)}}>
      <div className="form-group">
        <label htmlFor="producto_nombre">Nombre Producto:</label>
        <input
          type="text"
          className="form-control"
          id="producto_nombre"
          name="producto_nombre"
          value={value.producto_nombre}
          onChange={(e) => {actualizarInput(e)}}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="producto_descripcion">Descripción Producto:</label>
        <textarea
          className="form-control"
          id="producto_descripcion"
          name="producto_descripcion"
          value={value.producto_descripcion}
          onChange={(e) => {actualizarInput(e)}}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="producto_precio">Precio Producto:</label>
        <input
          type="number"
          className="form-control"
          id="producto_precio"
          name="producto_precio"
          value={value.producto_precio}
          onChange={(e) => {actualizarInput(e)}}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="producto_stock">Stock Producto:</label>
        <input
          type="text"
          className="form-control"
          id="producto_stock"
          name="producto_stock"
          value={value.producto_stock}
          onChange={(e) => {actualizarInput(e)}}
          required
        />
      </div>
      <div className="form-group">
        <label>Elegir Imagen</label>
        <input 
        type="file"
        onChange={(e) => {manejarImagen(e)}}
        className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {textoBoton}
      </button>
    </form>
  );
}
