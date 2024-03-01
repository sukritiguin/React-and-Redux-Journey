function TodoItem(props){
    let item = props.item;
    return (
        <div className="container">
            <div className="row custom-row">
                <div className="col-6">
                {item.task}
                </div>
                <div className="col-4">
                {item.deadline}
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-danger custom-button">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;