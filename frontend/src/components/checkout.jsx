import { useState, useContext } from 'react';
import { CartContext } from '../context/cartcontext';
import axios from 'axios';

export default function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');

    const handleCheckout = async () => {
        const order = {
            name,
            email,
            address,
            paymentInfo,
            items: cart
        };

        await axios.post('http://localhost:5050/api/order', order);
        clearCart();
        alert('Order submitted successfully!');
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Payment Information"
                    value={paymentInfo}
                    onChange={(e) => setPaymentInfo(e.target.value)}
                />
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}
