import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAction } from './actions/todoactions';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { index,name,status } = useParams();
    const todos = useSelector((state) => state.todos.todos);
    const [newTodo, setNewTodo] = useState({ name: '', status: '' });

    useEffect(() => {
        if (index !== undefined) {
            const todoIndex = parseInt(index, 10);
            if (todos[todoIndex]) {
                setNewTodo({name:name||todos[todoIndex].name,
                    status:status||todos[todoIndex].status
                });
            }
        }
    }, [index, todos,name, status]);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (index !== undefined && newTodo.name && newTodo.status) {
            dispatch(editAction(parseInt(index, 10), newTodo));
            navigate('/');
        } else {
            alert("Please fill in both fields");
        }
    };

    const handleCancelEdit = () => {
        navigate('/');
    };

    return (
        <div className="container">
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
        </div>
    );
};

export default EditTodo;