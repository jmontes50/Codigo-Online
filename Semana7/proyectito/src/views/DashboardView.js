import React,{Fragment, useState, useEffect} from 'react'
import {obtenerProductos} from '../services/productosService';
import ProductosTabla from '../components/ProductosTabla';
import Loading from '../components/Loading';

export default function DashboardView() {

  const [misProductos, SetMisProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getProductos = async () => {
    const productos = await obtenerProductos();
    SetMisProductos(productos);
    setCargando(false);
  }

  useEffect(()=>{
    getProductos();
  },[])

  return (
    <Fragment>
      {
        cargando 
        ? 
        (<Loading/>) 
        : 
        (
          <div>
            <h1>Dashboard</h1>
            <button className="btn btn-primary mb-3">Agregar Nuevo Producto</button>
            <ProductosTabla productos={misProductos} />
          </div>
        )
      }
    </Fragment>
  )
}
