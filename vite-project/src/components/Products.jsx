import './Products.css'

/* eslint-disable react/prop-types */
const LINK_IMG = 'https://imgs.search.brave.com/7Dv3fQGOCRQXF4QEePF9YyBhxiXYVP5-xwa33XbIAME/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MjU3MDMtTUxBNTAy/NjIyMjU1MDNfMDYy/MDIyLU8ud2VicA'

import { AddToCartIcon } from './Icons'


export function Products({ products}){
    console.log (products)
    return(
        <main className='products'>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                        <img src={LINK_IMG} alt={product.title}/>
                        <div>
                            <stong>{product.title}</stong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>


        </main>
    )
}