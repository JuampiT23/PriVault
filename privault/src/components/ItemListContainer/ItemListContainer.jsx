import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoriaId} = useParams()


    useEffect(() => {
        const asyncfunction = categoriaId ? getProductsByCategory : getProducts;
        asyncfunction(categoriaId)
        .then(data => setProducts(data))
        
    }, [categoriaId]);
        
    return (
        <div>
            <h3>Bienvenido a Privault</h3>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer