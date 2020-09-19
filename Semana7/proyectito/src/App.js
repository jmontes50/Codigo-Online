import React from 'react'
import Navigation from './components/Navigation';
import Tarjeta from './components/Tarjeta';
import Tarjetas from './components/Tarjetas';

export default function App() {
  return (
    <div>
      <Navigation/>
      <div class="container">
        <Tarjetas/>
      </div>
    </div>
  )
}
