function TodoItem({val,deleteTodo,index}){
    return(
        <div>
            {val.name}
            <button onClick={function(){
            deleteTodo(index);}}>
                Delete
            </button>
            <div>status:{val.status}</div>
            <br/>
            </div>
    );
}
export default TodoItem;