import { Link } from "react-router-dom";
import './TodoItem.css';

function TodoItem({ val, DeleteTodo }) {
    return (
        <div className="item">
            <span>{val.name} - {val.status}</span>
            <div>
                <button className="button" onClick={() => DeleteTodo(val._id)}>Delete</button>
                <Link to={`${val._id}`} className="link">View Todo</Link>
            </div>
        </div>
    );
}

export default TodoItem;
