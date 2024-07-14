export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    CLEAR: 'CLEAR'

}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {

    const {type:actionType, payload:actionPayload} = action

    
    switch (actionType) {

        
        
        case CART_ACTION_TYPES.ADD:{
        const {id} = actionPayload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if(productInCartIndex >= 0){
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity += 1
            return newState
        }
        const newState = [
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]
        updateLocalStorage(newState)
        return newState }

        case CART_ACTION_TYPES.REMOVE: {
            const {id} = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState

        }
        

        case CART_ACTION_TYPES.CLEAR: {
            updateLocalStorage(cartInitialState)
            return cartInitialState
        }

    }

        return state
}
