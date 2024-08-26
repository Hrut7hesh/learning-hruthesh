function TodoForms({ todoEntered, changeTodo, setStatus, addTodo, descriptionEntered, changeDescription }) {
    return (
        <div>
            <input type="text" value={todoEntered} onChange={changeTodo} placeholder="Enter a Todo" />
            <input type="text" value={descriptionEntered} onChange={changeDescription} placeholder="Enter a Description" />
            <select onChange={(e) => setStatus(e.target.value)}>
                <option value="complete">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default TodoForms;