function TodoForms({todoEntered,changeTodoEntered,setStatusEntered,addTodo})
    {
        return(
            <>
            <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
            <select onChange={function (e){
                setStatusEntered(e.target.value);
            }}>
            <option value="completed">Completed</option>
            <option value="incomplete">Not Completed</option>
            </select>
            <button onClick={addTodo}>add todo</button>
            </>
    )
}
export default TodoForms;