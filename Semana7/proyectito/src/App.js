import React from 'react'
import Navigation from './components/Navigation';
import Tarjeta from './components/Tarjeta';

export default function App() {
  return (
    <div>
      <Navigation/>
      <div class="container">
        <Tarjeta/>
      </div>
    </div>
  )
}
