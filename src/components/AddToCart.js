import { useCartContext } from '../contexts/cart.js'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cart'

export default function AddToCart({ product }) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const productInCart = cart[product.id];

    const handleAdd = () => {
        dispatch(addToCart(product))
    }
    const handleRemove = () => {
        dispatch(removeFromCart(product))
    }

    if (!productInCart) {
        return (
            <div>
                <button className="add-to-cart"
                        onClick={handleAdd}>
                    Add To Cart
                </button>
            </div>
        )
    }

    return (
        <div className="add-to-cart-container">
            <button className="btn" onClick={handleRemove}>
                -
            </button>
            {productInCart.quantity}
            <button className="btn" onClick={handleAdd}>
                +
            </button>
        </div>
    )
}