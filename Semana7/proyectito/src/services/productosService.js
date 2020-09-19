import axios from "axios";

const URL = "https://5f6419cd363f0000162d9468.mockapi.io/producto";

const obtenerProductos = async () => {
  try {
    let {data} = await axios.get(URL);
    return data;

  } catch (error) {
    return error;
  }
}

const obtenerProductoPorId = async (prod_id) => {
  try {
    let {data} = await axios.get(`${URL}/${prod_id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export {obtenerProductos, obtenerProductoPorId}