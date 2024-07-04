/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children, navigate }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        console.log(item)
        setCart(prevCart => {
            const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);
            if (itemInCart) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
            prevCart.map(cartItem =>
                cartItem.id === id ? { ...cartItem, quantity: Number(quantity) } : cartItem
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const checkout = () => {
        // Navigate to Checkout Component or handle checkout process
        navigate('/checkout');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};
