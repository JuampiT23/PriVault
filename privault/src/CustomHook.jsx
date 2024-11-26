import useProductsFilter from "./hooks/useProductsFilter"
import { useEffect } from "react";

const CustomeHook = () => {
    const {filter, setFilter, products} = useProductsFilter([]);
    useEffect(() => {}, [filter]);
    return(
        <div>CustomeHook</div>
    )
}