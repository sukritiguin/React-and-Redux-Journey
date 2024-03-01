import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = (props) => {
    let items_dict = props.items_dict;
    return (<>
        <div className={styles['items-container']}>
            {items_dict.map((item, index) => (
            <TodoItem key={index} item={item}></TodoItem>
            ))}
        </div>
    </>);
}

export default TodoItems;