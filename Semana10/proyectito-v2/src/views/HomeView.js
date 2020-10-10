import React, { useState, useEffect } from "react";
import Tarjetas from "../components/Tarjetas";
import { obtenerProductos } from "../services/productosService";
import Slider from "@material-ui/core/Slider";

export default function HomeView() {
  const [productos, setProductos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState([1,9999]);

  function precioText(value) {
    return `S/ ${value}`;
  }

  const getProducts = async () => {
    let data = await obtenerProductos();
    // console.log(data)
    setProductos(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  //----------------------------------------------------

  const manejarFiltroPrecio = (event, precio) => {
    setFiltroPrecio(precio);
  };

  const filtrarProductos = () => {
    let prodFiltrados = productos.filter(
      (prod) =>
        prod.producto_nombre
          .toLowerCase()
          .includes(filtroNombre.toLowerCase()) === true && prod.producto_precio >= filtroPrecio[0] && prod.producto_precio <= filtroPrecio[1]
    );

    setProductos(prodFiltrados);
  };

  return (
    <div className="mt-4">
      <h1>Cassiopea</h1>
      <div className="row">
        <div className="col-12 col-md-3">
          <h4>Filtrar Productos</h4>
          <div className="form-group">
            <label htmlFor="search">Por Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba el nombre de su producto"
              value={filtroNombre}
              onChange={(e) => {
                setFiltroNombre(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Por Precio:</label>
            <Slider
              value={filtroPrecio}
              onChange={manejarFiltroPrecio}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={precioText}
              min={1}
              max={999}
            />
          </div>
          <button
            className="btn btn-dark btn-sm btn-block"
            onClick={() => {
              filtrarProductos();
            }}
          >
            Filtrar
          </button>
        </div>
        <div className="col-12 col-md-9">
          <h3>Lista de Productos</h3>
          <Tarjetas productos={productos} />
        </div>
      </div>
    </div>
  );
}
