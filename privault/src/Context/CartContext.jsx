import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const cartState = () => {};
    const addItem = () => {};
    const removeItem = () => {};
    const clearCart = () => {};
    const getTotal = () => {};
    const getTotalItems = () => {};
    const totalItems = getTotalItems();

    const obj ={
        cart,
        cartState,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalItems  

    }
    return (
    <CartContext.Provider value={obj}>
        {children}
    </CartContext.Provider>
);
}