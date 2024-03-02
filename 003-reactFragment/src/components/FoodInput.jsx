import styles from "./FoodInput.module.css";

const FoodInput = (props) => {
    return (
        <>
            <input type="text" className={styles.inputBox} onKeyDown={props.handleKeyDown}/>
        </>
    );
};

export default FoodInput;