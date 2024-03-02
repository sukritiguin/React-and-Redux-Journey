import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

function FoodItems(props){
    let items = props.fragment_properties;

    let [activeItems, setActiveItems] = useState([]);

    let handleLearnButton = (property) => {
        console.log(`Learning ${property}`);
        if(activeItems.includes(property) == false){
            let newItems = [...activeItems, property];
            setActiveItems(newItems);
        }else{
            let newItems = activeItems.filter(item => item !== property);
            setActiveItems(newItems);
        }
    };
    
    return (
        <>
            <ErrorMessage items={items} />
            <ul className="list-group list-group-flush">
                {items.map(property => (
                    <Item property={property} handleLearnButton = {() => handleLearnButton(property)} isBought={activeItems.includes(property)}></Item>
                ))}
            </ul>
        </>
    );
}

export default FoodItems;
