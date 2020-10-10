import React, {Fragment} from 'react'
import {Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
import CarritoView from './views/CarritoView';
import DashboardView from './views/DashboardView';
import CrearProductoView from './views/CrearProductoView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

export default function routes() {

  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detalle/:id" component={DetailView} />
      <Route exact path="/carrito" component={CarritoView}/>
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/register" component={RegisterView} />
      
      <Route exact path="/admin/crearproducto" component={CrearProductoView} />
      <ProtectedRoute exact path="/admin/dashboard" component={DashboardView} />
    </Fragment>
  )
}
