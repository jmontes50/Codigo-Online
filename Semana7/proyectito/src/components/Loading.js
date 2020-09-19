import React from 'react'

export default function Loading() {
  return (
    <div
      style={{
        position:'fixed',
        top:'0',
        left:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'white',
        zIndex:'1000'
      }}
    >
      <i className="fas fa-spinner fa-spin fa-6x"
        style={{color:'blue', position:'relative', top:'calc(50% - 50px)', left:'calc(50% - 50px)'}}
      ></i>
    </div>
  )
}
