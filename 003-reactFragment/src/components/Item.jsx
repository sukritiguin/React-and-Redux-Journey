import styles from "./Item.module.css";

function Item(props) {
  let property = props.property;
  let handleLearnButton = props.handleLearnButton;
  return (
    <>
      <li>
        <div key={property} className={`list-group-item ${styles["iteam-li"]}`}>
          {property}
        </div>
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
