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

    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => {
        return !(cartItem.size === cartItemToRemove.size && cartItem.id === cartItemToRemove.id)
    })
}

export const updateItemFromCart = (cartItems, cartItemToUpdate, updatedValues) => {
    let updatedCartItems = [];

    // We checking if there is already the same item with the same size in the cart - if true
    // we remove the item that we updated and just add +1 to the quantity of the item with the same size that was found
    // if false - we update the item normaly
    const sameCartItemWithSameSize = cartItems.find(item => item.id === cartItemToUpdate.id &&
        item.size === updatedValues.size);

   if (sameCartItemWithSameSize) { 
       let newQuantity;
        const restItems = cartItems.filter(item =>{ 
            return item.id !== cartItemToUpdate.id ||
            (item.id === cartItemToUpdate.id && item.size !== cartItemToUpdate.size)
        })

        updatedCartItems = restItems.map(item => {

            if (item.id !== cartItemToUpdate.id || ((item.id === cartItemToUpdate.id && item.size !== updatedValues.size))) {
                return item;
            }

            if (updatedValues.hasOwnProperty('quantity')) {
                newQuantity = updatedValues.quantity;
            } else {
                newQuantity = item.quantity;
            }

            return {
                ...item,
                size: updatedValues.size,
                quantity: newQuantity + sameCartItemWithSameSize.quantity
            }
        })

        return updatedCartItems;
    } else {
        return cartItems.map(item => {        
            // Checking if cart item is not exsits - return the item.
            if (item.id !== cartItemToUpdate.id ||
                (item.id === cartItemToUpdate.id && !(item.size === cartItemToUpdate.size && item.quantity === cartItemToUpdate.quantity))) { 
                return item;
            } else {    
                // if item size and quantity was changed
                if (updatedValues.hasOwnProperty('size') && updatedValues.hasOwnProperty('quantity')) {
                    return {
                        ...item,
                        size: updatedValues.size,
                        quantity: updatedValues.quantity
                    }
                }
                // if item  size was changed
                if (updatedValues.hasOwnProperty('size') && !updatedValues.hasOwnProperty('quantity')) {
                    return {
                        ...item,
                        size: updatedValues.size
                    }
                }
                // if quantyity was changed
                if (!updatedValues.hasOwnProperty('size') && updatedValues.hasOwnProperty('quantity')) {
                    return {
                        ...item,
                        quantity: updatedValues.quantity
                    }
                }
            }
            return {
                ...item
            };
        })
    }

}

export const updateTotalCartItemsQuantity = (totalCartItemsQuantity, prevItemQuantity, updatedQuantity) => {
    if (updatedQuantity.hasOwnProperty('quantity')) { 
        return totalCartItemsQuantity - prevItemQuantity + updatedQuantity.quantity
    } else {
        return totalCartItemsQuantity;
    }
}

export const updateTotalPrice = (state, action) => {
    if (action.updatedValues.hasOwnProperty('quantity')) {
        return state.totalPrice - (action.item.price * action.item.quantity) + (action.updatedValues.quantity * action.item.price)
    } else {
        return state.totalPrice;
    }
}