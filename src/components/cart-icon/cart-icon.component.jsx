import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from "../../contexts/cart.context";
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen ,setIsCartOpen, cartItems} = useContext(CartContext)

    const cartCount = cartItems.reduce((total, item) => total+item.quantity, 0)

    const cartHandler = () => {
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon onClick={cartHandler} className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    
    )
}

export default CartIcon;