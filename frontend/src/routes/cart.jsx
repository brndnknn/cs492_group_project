import { useContext } from 'react';
import { CartContext } from '../context/cartcontext.jsx';

export default function Cart() {
    const { cart, updateQuantity, removeFromCart, checkout } = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
}
