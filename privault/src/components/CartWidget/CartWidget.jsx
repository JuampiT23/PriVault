import React, { useState } from 'react';

const CartWidget = () => {
    const [cantidad, setCantidad] = useState(0);
    const handleAgregar = () => {
      setCantidad(cantidad + 1);
    };
    const handleEliminar = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
      }
    };
  
    return (
      <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        <span className="badge">{cantidad}</span>
        <div className="cart-actions">
          <button onClick={handleAgregar}>Agregar</button>
          <button onClick={handleEliminar}>Eliminar</button>
        </div>
      </div>
    );
  };
  
  export default CartWidget