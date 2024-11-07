import NavBar from "./components/NavBar/NavBar";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// import CartWidget from "./components/CartWidget/CartWidget";
// import Title from './components/Title/Title'
import Card from './components/Card/Card' 
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
      <NavBar />
      </div>
      <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-md-4">
          <Card titulo="Producto 1" descripcion="Descripción de Producto 1" />
        </div>
        <div className="col-md-4">
          <Card titulo="Producto 2" descripcion="Descripción de Producto 2" />
        </div>
        <div className="col-md-4">
          <Card titulo="Producto 3" descripcion="Descripción de Producto 3" />
        </div>
      </div>
    </div>



    
      
    </>
  )
}

export default App