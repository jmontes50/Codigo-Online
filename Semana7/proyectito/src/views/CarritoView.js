import React, { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";

export default function CarritoView() {
  const { carrito } = useContext(CarritoContext);
  const [miCarrito, setMiCarrito] = useState([]);

  const configurarCarrito = () => {
    setMiCarrito(carrito);
  };

  useEffect(() => {
    configurarCarrito();
  }, []);

  return (
    <div>
      <h1>Su Carrito</h1>
      <h5 className="text-secondary">Proceda a su compra</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unit.</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {miCarrito.map(
            (
              {
                producto_id,
                producto_precio,
                producto_cantidad,
                producto_nombre,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{producto_nombre}</td>
                <td>{producto_cantidad}</td>
                <td>{producto_precio}</td>
                <td>{producto_cantidad * producto_precio}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
