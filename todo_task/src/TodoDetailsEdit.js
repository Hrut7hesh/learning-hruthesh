import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TodoDetailsEdit() {
    const [todoData, setTodoData] = useState({});
    const options = [{ Title: "Completed" }, { Title: "Incomplete" }];
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/todos/${id}`)
            .then(response => {
                setTodoData(response.data);
            })
            .catch(error => {
                console.error("Error fetching todo data:", error);
            });
    }, [id]);

    const editTodo = (e) => {
        e.preventDefault();
        const todoModifiedOb = {
            name: e.target.todoitem.value,
            status: e.target.status.value,
            description: e.target.description.value
        };
        axios.put(`/todos/${id}`, todoModifiedOb)
            .then(response => {
                console.log("Todo updated successfully:", response.data);
                navigate(`/todo/${id}`);
            })
            .catch(error => {
                console.error("Error updating todo:", error);
            });
    };

    return (
        <form onSubmit={editTodo}>
            <input 
                type="text"
                name="todoitem"
                value={todoData.name || ''}
                onChange={(e) => setTodoData({ ...todoData, name: e.target.value })}
                placeholder="Enter todo name"
            />
            <select 
                name="status"
                value={todoData.status || 'Incomplete'}
                onChange={(e) => setTodoData({ ...todoData, status: e.target.value })}
            >
                {options.map((option) => (
                    <option key={option.Title} value={option.Title}>
                        {option.Title}
                    </option>
                ))}
            </select>
            <input 
                type="text"
                name="description"
                value={todoData.description || ''}
                onChange={(e) => setTodoData({ ...todoData, description: e.target.value })}
                placeholder="Enter description"
            />
            <button type="submit">Edit Todo</button>
        </form>
    );
}

export default TodoDetailsEdit;
