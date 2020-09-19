import React, {Fragment} from 'react'
import {Route} from "react-router-dom";
import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
import CarritoView from './views/CarritoView';

export default function routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detalle/:id" component={DetailView} />
      <Route exact path="/carrito" component={CarritoView}/>
    </Fragment>
  )
}
