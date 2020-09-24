import React, {Fragment} from 'react'
import {Route} from "react-router-dom";
import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
import CarritoView from './views/CarritoView';
import DashboardView from './views/DashboardView';
import CrearProductoView from './views/CrearProductoView';

export default function routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detalle/:id" component={DetailView} />
      <Route exact path="/carrito" component={CarritoView}/>
      <Route exact path="/admin/dashboard" component={DashboardView} />
      <Route exact path="/admin/crearproducto" component={CrearProductoView} />
    </Fragment>
  )
}
