import React from 'react'
import {Bar} from 'react-chartjs-2';

export default function Grafico({productos}) {

  console.log(productos)

  let nombresProductos = productos.map(prod => prod.producto_nombre);
  console.log(nombresProductos);

  let stockProductos = productos.map(prod => prod.producto_stock);
  console.log(stockProductos);

  let options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

  const data = {
    labels: [...nombresProductos],
    datasets:[
      {
        label:"Stock",
        data:[...stockProductos]
      }
    ]
  }

  return (
    <div>
      <h2>Estadísticas</h2>
      <Bar data={data} options={options}/>
    </div>
  )
}
