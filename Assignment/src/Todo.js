import { useEffect, useState } from "react";
import axios from "axios";
function Todo(){
    let todosInitialValue= [{name:"Default name",status:"default status"}];
    let [todos,setTodos]= useState(todosInitialValue);
    let [todoEntered,setTodoEntered]= useState('Default Todo');
    let [statusEntered,setStatusEntered]= useState('Default status');
    useEffect(function(){
        console.log("function called on load");
        getTodos();
    },[]);
    function changeTodoEntered(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setTodoEntered(e.target.value);
    }
    function getTodos(){
        axios
        .get("/todos")
        .then(function(response){
            console.log(response.data);
            setTodos(response.data)
        })
        .catch(function(error){
            console.log(error);
        })
    }
    function addTodo(){
        let newTodoObject={name: todoEntered, status: statusEntered}
        console.log(newTodoObject);
        axios.post("/todos",newTodoObject)
        .then(function(response){
            console.log(response);
            if(response.data.status==1){
                getTodos();
            }
        })
        .catch(function (err){
            console.log(err)
        });

    }
    function deleteTodo(indexToDelete){
        axios.delete(`/todos/${indexToDelete}`)
        .then(function(response){
            console.log(response);
            getTodos();
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(
        <div>
            <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
            <select onChange={function (e){
                setStatusEntered(e.target.value);
            }}>
            <option value="completed">Completed</option>
            <option value="incomple">Not Completed</option>
            </select>
            <button onClick={addTodo}>add todo</button>
            
            
            
            {
                todos.map(function (val,index){
                    return<div>{val.name}
                     <button onClick={function(){
                deleteTodo(index);}}>delete</button>
                <div>status:{val.status}</div>
                <br/>
                    </div>;
                })
            }
        </div>
    );
}
export default Todo;