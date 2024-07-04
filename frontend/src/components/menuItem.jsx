/* eslint-disable react/prop-types */
export default function MenuItem({ item, addToCart }){
    return(
        <div className="menu-item">
            <h3>{item.name} </h3>
            
            {item.description}
            <br/> 
            <img src={item.image} className="menu-image"/>
            <br /> 
            ${item.price}
            <br />
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
}

