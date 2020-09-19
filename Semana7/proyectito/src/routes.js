import React, {Fragment} from 'react'
import {Route} from "react-router-dom";
import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

export default function routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detalle" component={DetailView} />
    </Fragment>
  )
}
