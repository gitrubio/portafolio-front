import React from 'react'
import './Layout.css'
const secciones = [{id : 'A', color : 'red'},{id : 'B', color : 'blue'},{id : 'C', color : 'green'}]
export default function Layout() {
  return (
    <div className='sections'>
      <nav className='nav-sections'> Scroll to:
          <a href="#sectionA" className="link bg-red">A</a>

          <a href="#sectionB" className="link bg-blue">B</a>

          <a href="#sectionC" className="link bg-green">C</a>
      </nav>
      <div className="wrapper">
             {secciones.map(seccion =>  <div id={`section${seccion.id}`} className={`section bg-${seccion.color}`}>{seccion.id}</div>)}
      </div>
    </div>
  )
}
