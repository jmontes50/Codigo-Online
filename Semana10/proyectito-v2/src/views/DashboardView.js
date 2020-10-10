import React, { Fragment, useState, useEffect } from "react";
import { obtenerProductos, borrarProducto } from "../services/productosService";
import ProductosTabla from "../components/ProductosTabla";
import Loading from "../components/Loading";
import Grafico from "../components/Grafico";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function DashboardView() {
  const [misProductos, SetMisProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getProductos = async () => {
    const productos = await obtenerProductos();
    SetMisProductos(productos);
    setCargando(false);
  };

  const deleteProduct = (id) => {
    Swal.fire({
      icon: "danger",
      title: "Are you sure??????????",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
        return;
      }
      setCargando(true); //comienzo a cargar porque mi peticion demora
      const productoEliminado = await borrarProducto(id); //borro, va a demorar
      console.log(productoEliminado);
      getProductos();
    });
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div>
          <h1>Dashboard</h1>
          <Link className="btn btn-primary mb-3" to="/admin/crearproducto">
            Agregar Nuevo Producto
          </Link>
          <ProductosTabla
            productos={misProductos}
            deleteProduct={deleteProduct}
          />
          <Grafico productos={misProductos}/>
        </div>
      )}
    </Fragment>
  );
}
