import React, { Fragment } from "react";

export default function ProductosTabla({ productos, deleteProduct }) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(
            (
              {
                producto_nombre,
                producto_descripcion,
                producto_precio,
                producto_stock,
                producto_id,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{producto_nombre}</td>
                <td>{producto_descripcion.slice(0, 40)} ...</td>
                <td>{producto_stock}</td>
                <td>{producto_precio}</td>
                <td>
                  <button className="btn btn-outline-info btn-sm mr-2">
                    <i className="fas fa-pen-alt"></i>
                  </button>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteProduct(producto_id)}}>
                  <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
