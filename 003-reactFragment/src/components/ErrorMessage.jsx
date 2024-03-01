function ErrorMessage(props){
    let items = props.items;
    return (<>
        {items.length === 0 ? <h3>No iteam found</h3>: null}  
        </>);
}

export default ErrorMessage;