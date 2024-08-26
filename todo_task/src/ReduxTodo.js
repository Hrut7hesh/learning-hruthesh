import React, { useState,useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, deleteAction, deleteallAction,asyncAddAction,loadInitialTodo,postTodo,deleteTodo } from './actions/todoactions';
import { useNavigate} from 'react-router-dom';
import './ReduxTodo.css';

const ReduxTodo = () => {
    loadInitialTodo();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const navigate = useNavigate();
    const [newTodo, setNewTodo] = useState({ name: '', status: '' });

    useEffect(() => {
        dispatch(loadInitialTodo());
    }, [dispatch]);
    const handlepostTodo = (e) =>{
        e.preventDefault();
        dispatch(postTodo(newTodo));
    }
    const handledeleteTodo = (index) =>{
        dispatch(deleteTodo(index));
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        // if (newTodo.name && newTodo.status) {
        //     dispatch(addAction(newTodo));
        //     setNewTodo({ name: '', status: '' });
        // } else {
        //     alert("Please fill in both fields");
        // }
        // const todo = {name:e.target.name.value,status:e.target.status};
        dispatch(addAction(newTodo));
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteAction(index));
    };

    const handleDeleteAll = () => {
        dispatch(deleteallAction());
    };

    return (
        <div className="container">
            <form onSubmit={handlepostTodo}>
                <input
                    type="text"
                    value={newTodo.name}
                    onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
                    placeholder="Enter todo name"
                />
                <select
                    value={newTodo.status}
                    onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
                >
                    <option value="">Select status</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button type="submit">Add Todo</button>
            </form>
            <button className="delete-button" onClick={handleDeleteAll}>Delete All Todos</button>
            {/* <button onClick={}>Show Data</button> */}
            {todos.map((todo, index) => (
                <div key={index} className="todo-item">
                    <div>Name: {todo.name}</div>
                    <div>Status: {todo.status}</div>
                    <button onClick={() => handledeleteTodo(index)}>Delete</button>
                    <button className="edit-button" onClick={() => navigate(`/edit/${index}/${todo.name}/${todo.status}`)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default ReduxTodo;