/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//Crear el contexto
export const FiltersContext = createContext()



//CREAR EL PROVIDER, PARA PROVEER EL CONTEXTO
export function FiltersProvider({ children }){

    const [filters, setFilters] = useState({
        category:'all', price: 0
    })

    return(
        <FiltersContext.Provider value={{
            filters, setFilters
        }}>

            {children}
        </FiltersContext.Provider>
    )
}