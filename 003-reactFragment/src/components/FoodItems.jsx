import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

function FoodItems(props){
    let items = props.fragment_properties;
    
    return (
        <>
            <ErrorMessage items={items} />
            <ul className="list-group list-group-flush">
                {items.map(property => (
                    <Item property={property} handleLearnButton = {() => console.log(`Learning ${property}`)}></Item>
                ))}
            </ul>
        </>
    );
}

export default FoodItems;
