import { useId } from 'react'
import {CartIcon, ClearCartIcon} from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.jsx'

export function Cart() {

    const cartCheckBoxId = useId()
    const {cart, clearCart, addToCart} = useCart()
   
    function CartItem({thumbnail, name, price, quantity, addToCart}) {
        return (
            <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPo7Jczg2qPKpzUq3B7D1VDs2utJQAn4Hccg&s"
            alt={cartCheckBoxId} />

            <div> <strong>{name}</strong> -${price}</div>    

        <footer>
        <small >
            Qty: {quantity}
        </small>
            <button onClick={addToCart} >+</button>
        </footer>
        </li>
        )}

    return (
        <>
            <label className="cart-button" htmlFor = {cartCheckBoxId}>
            <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden/>    
            <aside className="cart">
            <ul>
                {cart.map((product) => (
                    <CartItem 
                    key={product.id} 
                    addToCart={() => addToCart(product)}
                    {...product} />
                ))}
            </ul>

            <button style={{backgroundColor: 'white'}} onClick={clearCart}>
                <ClearCartIcon />
                Clear Cart
            </button>
            </aside>
        </>

    )}