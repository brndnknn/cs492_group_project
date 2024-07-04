/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import { CartProvider } from '../context/cartcontext';

const CartProviderWrapper = ({ children }) => {
    const navigate = useNavigate();
    return (
        <CartProvider navigate={navigate}>
            {children}
        </CartProvider>
    );
};

export default CartProviderWrapper;
