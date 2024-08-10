import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAction, deleteAction, deleteallAction, editAction } from './actions/todoactions';
import { useNavigate, useParams } from 'react-router-dom';
import './ReduxTodo.css';

const ReduxTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const navigate = useNavigate();
    const { index } = useParams();
    const [editIndex, setEditIndex] = useState(null);
    const [newTodo, setNewTodo] = useState({ name: '', status: '' });

    useEffect(() => {
        if (index !== undefined) {
            const todoIndex = parseInt(index, 10);
            if (todos[todoIndex]) {
                setEditIndex(todoIndex);
                setNewTodo(todos[todoIndex]);
            }
        } else {
            setEditIndex(null);
            setNewTodo({ name: '', status: '' });
        }
    }, [index, todos]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addAction(newTodo));
        setNewTodo({ name: '', status: '' });
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteAction(index));
    };

    const handleDeleteAll = () => {
        dispatch(deleteallAction());
    };

    const handleEditTodo = (index) => {
        navigate(`/edit/${index}`);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(editAction(editIndex, newTodo));
        navigate('/');
    };

    const handleCancelEdit = () => {
        navigate('/');
    };

    return (
        <div className="container">
            {editIndex !== null ? (
                <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        value={newTodo.name}
                        onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
                        placeholder="Enter new todo name"
                    />
                    <select
                        value={newTodo.status}
                        onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
                    >
                        <option value="">Select status</option>
                        <option value="complete">Complete</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={handleCancelEdit}>Cancel</button>
                </form>
            ) : (
                <form onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        name="name"
                        value={newTodo.name}
                        onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
                        placeholder="Enter todo name"
                    />
                    <select
                        name="status"
                        value={newTodo.status}
                        onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
                    >
                        <option value="">Select status</option>
                        <option value="complete">Complete</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                    <button type="submit">Add Todo</button>
                </form>
            )}
            <button onClick={handleDeleteAll}>Delete All Todos</button>
            {todos.map((todo, index) => (
                <div key={index} className="todo-item">
                    <div>Name: {todo.name}</div>
                    <div>Status: {todo.status}</div>
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    <button className="edit-button" onClick={() => handleEditTodo(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default ReduxTodo;
