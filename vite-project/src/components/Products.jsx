import './Products.css'

/* eslint-disable react/prop-types */
const LINK_IMG = 'https://imgs.search.brave.com/7Dv3fQGOCRQXF4QEePF9YyBhxiXYVP5-xwa33XbIAME/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MjU3MDMtTUxBNTAy/NjIyMjU1MDNfMDYy/MDIyLU8ud2VicA'

import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'


export function Products({ products}){
    const {cart, addToCart,  removeToCart} = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <main className='products'>
            <ul>
                
                {products.map(product =>{
                    const isProductInCart = checkProductInCart(product)
                    return(
                    <li key={product.id}>
                        <img src={LINK_IMG} alt={product.title}/>
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button style={{backgroundColor: isProductInCart ? 'red' : 'white'} } 
                            onClick={()=>isProductInCart ? removeToCart(product) : addToCart(product)}

                                >
                                {isProductInCart 
                                ? <RemoveFromCartIcon/> 
                                :  <AddToCartIcon />
                                }
                                
                                
                            
                            
                            </button>
                        </div>
                    </li>
                )})}
            </ul>


        </main>
    )
}