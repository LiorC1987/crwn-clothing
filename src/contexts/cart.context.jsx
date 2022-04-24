import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
cartItems.some(item => item.id === productToAdd.id) ?
 cartItems.find(item => item.id === productToAdd.id).quantity += 1 :
 cartItems = [...cartItems, {...productToAdd, quantity:1 }]

 return cartItems.slice();
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))

    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

