import { useEffect, useState } from "react"

const useCosmetics = () =>{
    const [cosmetics, setCosmetics] = useState([]);
    

    useEffect( () =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCosmetics(data));
    }, []);
    return [cosmetics, setCosmetics];
}
export default useCosmetics;