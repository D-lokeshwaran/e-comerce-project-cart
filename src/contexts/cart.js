import { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const newCart = {...prevCart};
            if (newCart[product.id]) {
                const newProduct = {...newCart[product.id]};
                newProduct.quantity += 1;
                newCart[product.id] = newProduct;
            } else {
                newCart[product.id] = {
                    ...product,
                    quantity: 1
                }
            }
            return newCart;
        })
    }

    const removeFromCart = (id) => {
        setCart(prevCart => {
            const newCart = {...prevCart};
            if (!newCart[id]) return;
            else if (newCart[id].quantity === 1) {
                delete newCart[id];
            } else {
                const newProduct = {...newCart[id]};
                newProduct.quantity -= 1;
                newCart[id] = newProduct;
            }
            return newCart;
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
