import React, { useEffect } from "react";
import { subirImagen } from "../services/productosService";
import { storage } from "../config/firebase";
import { useForm } from "react-hook-form";
import {v4 as uuidv4} from "uuid";

let imagenProducto;

export default function FomularioProductoEdit({
  editProduct,
  producto,
  textoBoton,
}) {
  let { register, handleSubmit, setValue, errors } = useForm();

  //Con este useEffect obtengo de los props producto y actualizo en los input cada valor correspondiente
  useEffect(() => {
    let {
      producto_nombre,
      producto_descripcion,
      producto_precio,
      producto_stock,
    } = producto;
    setValue("producto_nombre", producto_nombre);
    setValue("producto_descripcion", producto_descripcion);
    setValue("producto_precio", producto_precio);
    setValue("producto_stock", producto_stock);
  }, [producto]);

  const cambiarNombre = (nombre) => {
    //nombre aleatorio
    let nombreAleatorio = uuidv4();
    //separar
    let separarNombre = nombre.split(".")
    //concatenamos
    let nuevoNombre = `${nombreAleatorio}.${separarNombre[1]}`
    return nuevoNombre;
  }

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0];
    // console.log(miImagen);
    imagenProducto = miImagen;
    // console.log("name",imagenProducto.name)
  };

  const manejarSubmit = (data) => {
    //si es que he tocado el componente input y he agregado una imagen, imagenProducto sera diferente de undefined
    if (imagenProducto !== undefined) {
      let nuevoNombre = cambiarNombre(imagenProducto.name);
      const refStorage = storage.ref(`productos/${nuevoNombre}`);
      subirImagen(imagenProducto, refStorage).then((urlImagen) => {
        console.log(urlImagen);
        // setValue({...value, producto_imagen:urlImagen})
        //despues de que ya subi mi imagen
        editProduct({ ...data, producto_imagen: urlImagen }, producto.producto_id); //mando a editar el Producto
      });
    }else{
      editProduct({...data}, producto.producto_id);//mando a editar el Producto, pero sin imagen
    }
  };

  return (
    <form onSubmit={handleSubmit(manejarSubmit)}>
      <div className="form-group">
        <label htmlFor="producto_nombre">Nombre Producto:</label>
        <input
          type="text"
          className="form-control"
          id="producto_nombre"
          name="producto_nombre"
          ref={register({ required: true })}
        />
        {errors.producto_nombre &&
          errors.producto_nombre.type === "required" && (
            <small className="text-danger font-weight-bold">
              Nombre es requerido
            </small>
          )}
      </div>
      <div className="form-group">
        <label htmlFor="producto_descripcion">Descripción Producto:</label>
        <textarea
          className="form-control"
          id="producto_descripcion"
          name="producto_descripcion"
          ref={register({ required: true })}
        />
        {errors.producto_descripcion &&
          errors.producto_descripcion.type === "required" && (
            <small className="text-danger font-weight-bold">
              Descripción es requerido
            </small>
          )}
      </div>
      <div className="form-group">
        <label htmlFor="producto_precio">Precio Producto:</label>
        <input
          type="number"
          className="form-control"
          id="producto_precio"
          name="producto_precio"
          ref={register({ required: true, min: 1 })}
        />
        {errors.producto_precio &&
          errors.producto_precio.type === "required" && (
            <small className="text-danger font-weight-bold">
              Precio es requerido
            </small>
          )}
        {errors.producto_precio && errors.producto_precio.type === "min" && (
          <small className="text-danger font-weight-bold">
            No puede ser menor a 0
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="producto_stock">Stock Producto:</label>
        <input
          type="text"
          className="form-control"
          id="producto_stock"
          name="producto_stock"
          ref={register({ required: true, min: 1 })}
        />
        {errors.producto_stock && errors.producto_stock.type === "required" && (
          <small className="text-danger font-weight-bold">
            Stock es requerido
          </small>
        )}
        {errors.producto_stock && errors.producto_stock.type === "min" && (
          <small className="text-danger font-weight-bold">
            No puede ser menor a 0
          </small>
        )}
      </div>
      <div className="form-group">
        <label>Elegir Imagen</label>
        <input
          type="file"
          onChange={(e) => {
            manejarImagen(e);
          }}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {textoBoton}
      </button>
    </form>
  );
}
