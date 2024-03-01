function TodoItem(){
    return (
        <div className="container">
            <div className="row custom-row">
                <div className="col-6">
                Buy Milk
                </div>
                <div className="col-4">
                10-12-2023
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-danger custom-button">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;