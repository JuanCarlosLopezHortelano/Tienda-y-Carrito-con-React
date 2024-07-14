import { createContext, useReducer } from "react";
import { cartReducer,cartInitialState  } from "../reducer/cart";


export const CartContext = createContext()



function useCartReducer () {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({type:'ADD', payload:product})
    

    const clearCart = () => dispatch({type:'CLEAR'})

    const removeToCart = product => dispatch({type:'REMOVE', payload:product})

    return [state, addToCart, removeToCart, clearCart]
}

// eslint-disable-next-line react/prop-types
export function CartProvider({children}){
    
    const [state, addToCart, removeToCart, clearCart] =  useCartReducer()




    return (
        console.log(removeToCart),
        <CartContext.Provider value={{
            cart :state,
            addToCart,
            removeToCart,
            clearCart
            
            
            }}>

            {children}
        </CartContext.Provider>
    )
}