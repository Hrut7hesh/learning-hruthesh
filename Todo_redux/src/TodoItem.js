import { Link } from "react-router-dom";
import TodoDetails from "./TodoDetails";

function TodoItem({val,deleteTodo,index}){
    return(
        <div>
            {val.name}
            <button onClick={function(){
            deleteTodo(index);}}>
                Delete
            </button>
            <Link to={`${index}`}>View Todo</Link>
            <br/>
        </div>
    );
}
export default TodoItem;