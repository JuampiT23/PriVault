import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {productId} = useParams();

    useEffect(() => {
        getProductById(productId)
        .then(resp => setProduct(resp))
    }, [productId])

    return (
    <div>
        <h2>Detalle del Producto</h2>
        <hr />
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer