import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Card from './components/Card/Card'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ProductPage from './components/ProductPage/ProductPage'
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./Context/CartContext";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:productId" element={<ProductPage />} />
          <Route path="/categoria/:categoryId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    

  )
}

export default App