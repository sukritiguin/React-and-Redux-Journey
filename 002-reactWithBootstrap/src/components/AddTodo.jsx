function AddTodo(){
    return (
        <>
            <div className="row custom-row">
                <div className="col-6">
                <input type="text" placeholder="Enter todo here..." />
                </div>
                <div className="col-4">
                <input type="date" name="" id="" />
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-success custom-button">Add</button>
                </div>
            </div>
        </>
    );
}

export default AddTodo;