import { useState,useEffect } from "react";
import axios from "axios";

let Item = () => {
    let [items, setitems] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setitems(response.data); 
            })
            .catch(error => {
                console.error( error);
            });
    }, []); 

    return (
        <>
        <h2>Items</h2>
        <div>          
            {items.map(item => (
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt="item-Image"/>
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                        <p>{item.description}</p>
                        <p>Rating: {item.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};
export default Item;