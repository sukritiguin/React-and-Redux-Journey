import styles from "./Item.module.css";

function Item(props){
    let property = props.property;
    return (
        <>
            <li key={property} className={`list-group-item ${styles['iteam-li']}`}>{property}</li>
        </>
    );
}

export default Item;