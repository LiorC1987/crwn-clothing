import "./product-card.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component"

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)
    const {name, price, imageUrl} = product;

    return (
        <div className="product-card-container">
            <img src={imageUrl} />
            <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            </div>
            <Button onClick={() => addItemToCart(product)} buttonType='inverted'>Add to cart</Button>
        </div>
    )
}

export default ProductCard