import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import Card from './components/Card/Card' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ProductPage from './components/ProductPage/ProductPage'
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import './App.css'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <div>
          <NavBar /><CartWidget />
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:productId" element={<ProductPage />} />
          <Route path="/categoria/:categoryId" element={<ItemDetailContainer />} />
          {/* <Route path="/marcas" element={<ItemListContainer />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      {/* <div className="container mt-5 mb-5 ">
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
    </div> */}
    
      </BrowserRouter>
    

    </>
  )
}

export default App