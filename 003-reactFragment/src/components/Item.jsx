import styles from "./Item.module.css";

function Item(props) {
  let property = props.property;
  let handleLearnButton = props.handleLearnButton;
  let isBought = props.isBought;


  return (
    <>
      <li key={property} className={`list-group-item ${isBought && 'active'} ${styles["iteam-li"]}`}>
          {property}
        <span>
          <button
            className={styles.learnButton}
            onClick={handleLearnButton}
          >
            Learn More
          </button>
        </span>
      </li>
    </>
  );
}

export default Item;
