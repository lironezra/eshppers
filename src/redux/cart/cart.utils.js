export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isItemExistsInCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
    );

    if (isItemExistsInCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem    
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => {
        return !(cartItem.size === cartItemToRemove.size && cartItem.id === cartItemToRemove.id)
    })
}