import React, {useState, useEffect} from 'react'
import Tarjeta from './Tarjeta';
import {obtenerProductos} from '../services/productosService';

export default function Tarjetas() {

  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    let data = await obtenerProductos()
    // console.log(data)
    setProductos(data)
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className="row">
      {
        productos.map((prod, i) => (
          <Tarjeta producto={prod} key={i}/>
        ))
      }
    </div>
  )
}
