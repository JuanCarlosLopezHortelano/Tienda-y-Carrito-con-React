/* eslint-disable react/prop-types */
import { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters() {
    const {filters, setFilters} = useFilters()
    
    console.log(filters)
   

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice =  (event) => {
        
        setFilters(prevState =>({
            ...prevState,minPrice: event.target.value
        }))
    }

    const handleChangeCategory =  (event) => {
        setFilters(prevState =>({
            ...prevState,category: event.target.value
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>A partir de :</label>
                <input type="range" id={minPriceFilterId} min='0' max ='1000' onChange={handleChangeMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>  
            <div>
                <label htmlFor={categoryFilterId}>Categorias</label>
                <select  id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            
            </div>



        </section>
    )
}