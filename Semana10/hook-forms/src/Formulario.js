import React from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  let { register, handleSubmit, errors } = useForm();

  let escucharSubmit = (data) => {
    console.log(data);
  };

  let revisarEstado = (value) => {
    if(value === "complicado"){
      return false; //a que hay un error
    }else{
      return true;
    }
  }

  return (
    <div className="container">
      <h2>Hook Forms</h2>
      <form onSubmit={handleSubmit(escucharSubmit)}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.nombre && errors.nombre.type === "required" && (
            <small className="text-danger">El nombre es obligatorio</small>
          )}
        </div>
        <div className="form-group">
          <label>DNI</label>
          <input
            type="number"
            name="dni"
            placeholder="Ingresa tu DNI ej: 162345697"
            className="form-control"
            ref={register({ required: true, minLength: 8, maxLength: 8 })}
          />
          {errors.dni && errors.dni.type === "required" && (
            <small className="text-danger">El dni es obligatorio</small>
          )}
          {errors.dni && errors.dni.type === "minLength" && (
            <small className="text-danger">Es DNI no puede ser menor a 8 dígitos</small>
          )}
          {errors.dni && errors.dni.type === "maxLength" && (
            <small className="text-danger">Es DNI no puede ser mayor a 8 dígitos</small>
          )}
        </div>
        <div className="form-group">
          <label>Estado Civil</label>
          <select name="estado" className="form-control" ref={register({validate:revisarEstado})}>
            <option value="soltero">Soltero - Soltera</option>
            <option value="casado">Casado - Casada</option>
            <option value="complicado">Complicado</option>
          </select>
          {errors.estado && errors.estado.type === "validate" && (
            <small className="text-danger">Huyeee, Huyeeeeeee!</small>
          )}
        </div>
        <button className="btn btn-primary btn-block">Enviar Formulario</button>
      </form>
    </div>
  );
}
