import { useEffect, useState } from "react";

function useProductsFilter(initialProducts) {
    const [products, setProducts] = useState(initialProducts);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        if(filter === '') {
            setProducts(initialProducts);
        }
        else {
            setProducts(initialProducts.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())));
        }
    }, [produts, filter])

    return {
        filter,
        setFilter,
        products,
    }
}

export default useProductsFilter