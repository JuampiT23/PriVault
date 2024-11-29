import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncfunction = categoryId ? getProductsByCategory : getProducts;
        asyncfunction(categoryId)
        .then(data => setProducts(data))
        
    }, [categoryId]);
        
    return (
        <div>
            <h3>Bienvenido a Privault</h3>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer