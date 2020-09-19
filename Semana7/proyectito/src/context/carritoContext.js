import React,{useState, createContext} from 'react';

export const CarritoContext = createContext();

const CarritoContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const anadirProducto = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <CarritoContext.Provider value={{carrito, anadirProducto}}>
      {props.children}
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider;