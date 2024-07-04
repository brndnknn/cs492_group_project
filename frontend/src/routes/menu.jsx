import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import MenuItem from "../components/menuItem";
import { CartContext } from "../context/cartcontext";

export default function Menu() {
    const [menu, setMenu] = useState([]);
    const { addToCart } = useContext(CartContext);
    
    const fetchMenu = async() => {
        const response = await axios.get('http://localhost:5050/api/menu');
        setMenu(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchMenu()
    }, []);
  return (
    <div>
        <h1>Menu</h1>
        <ul>
            {menu.map(item => (
                    <MenuItem key = {item.id} item={item} addToCart={addToCart}/>
            ))}
        </ul>
        
    </div>
  );
}





