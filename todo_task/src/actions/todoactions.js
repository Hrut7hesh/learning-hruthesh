import axios from "axios";
const addAction = (todo) => ({ type: "ADD", todo });
const asyncAddAction = (todo) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:"ADD",todo:todo});
        },4000);
    };
};
function loadInitialTodo(){
    return (dispatch)=>{
        axios.get('/todos')
        .then((res)=>{
            console.log(res.data);
            return dispatch({type:'LOAD_TODOS',todos:res.data})
        })
    }
}
function postTodo(todo){
    return (dispatch)=>{
        axios.post('/todos',todo)
        .then((res)=>{
            return dispatch({type:'POST_TODO',todos:todo})
        })
    }
}
function deleteTodo(index){
    return (dispatch)=>{
        axios.delete('/todos',index)
        .then((res)=>{
            return dispatch({type:'DELETE_TODO',index})
        })
    }
}
const deleteAction = (id) => ({ type: "DELETE", id });
const deleteallAction = () => ({ type: "DELETEALL" });
const editAction = (id, todo) => ({ type: "EDIT", id, todo });

export { addAction, deleteAction, deleteallAction, editAction, asyncAddAction,loadInitialTodo ,postTodo,deleteTodo};