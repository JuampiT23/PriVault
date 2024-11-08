import Title from './components/Title/Title'
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import Card from './components/Card/Card' 
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './App.css'

function App() {

  return (
    <>
      <div>
      <Title />
      </div>
      <div>
      <NavBar /><CartWidget />
      </div>
      <div>
      
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