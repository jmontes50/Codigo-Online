import React, {useState} from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import './App.css';

export default function App() {

  const [marcadores, setMarcadores] = useState([[-16.4, -71.53]])

  const anadirMarcador = (e) => {
    console.log("anadirMarcador", e)
    let marcador = [e.latlng.lat, e.latlng.lng];
    setMarcadores([...marcadores, marcador]);
  }

  return (
    <div>
      <Map
        center={[-16.4, -71.53]} //latitud y longitud
        zoom={13}
        className="mapita"
        onClick={(e)=>{anadirMarcador(e)}}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* El tileLayer me indica que proveedor de datos se utiliza para este mapa */}
          {/* <Marker position={[-16.4, -71.53]}/>
          <Marker position={[-16.6, -72.53]}/> */}
          {marcadores.map((marker, i) => (
            <Marker position={marker} key={i} >
              <Popup>
                <span>Café!</span>
              </Popup>
            </Marker>
          ))}
      </Map>
    </div>
  );
}
