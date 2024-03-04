import logo from '../logo.png'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../contexts/cart.js'
import { useSelector } from 'react-redux'

export default function Header({ selectedCategory, setSelectedCategory }) {

    const [data, setData] = useState([]);
    const [] = useState('electronics');
    const cart = useSelector((state) => state.cart);
//    const { cart } = useCartContext();

    const total = () => {
        let count = 0;
        for (let item in cart) {
            count += cart[item].quantity;
        }
        return count;
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(resp => resp.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className="header-items">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            {data.map((category) =>
                <button className={"override-btn header-item " +
                            (selectedCategory === category && 'header-item--selected')}
                        onClick={() => setSelectedCategory(category)}>
                    {category}
                </button>
            )
            }
            <div className="shopping-cart">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span className="cart-length">{total()}</span>
            </div>
        </div>
    )

}