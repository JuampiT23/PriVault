import { useState } from "react"

const useMeliSearch = () => {
    const [results, setResults] = useState([])
    const searchResults = async (query) => {
        setLoading (true)    
            try {
            const resul = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            const data = await resul.json()
            setResults(data.results)
        }catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }        
    }
}

export default useMeliSearch