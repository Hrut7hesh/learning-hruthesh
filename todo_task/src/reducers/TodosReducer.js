const initialState = {
    todos:[
        {name:"default todos1",status:"complete"},
        {name:"default todos2",status:"incomplete"},
    ],
};
const TodosReducer = (state=initialState,action)=>{
    if(action.type=="ADD"){
        let newTodos = [...state.todos,action.todo];
        let newState = {...state,todos: newTodos};
        return newState;
    }
    if(action.type=="DELETE"){
        let newState = {...state,todos: state.todos.filter((_, index) => index !== action.id)};
        return newState;
    }
    if(action.type=="DELETEALL"){
        let newState = {...state,todos:[]};
        return newState;
    }
    if(action.type=="EDIT"){
        let newState = {...state,todos:state.todos.map((todo, index) =>
            index === action.id ? action.todo : todo)};
        return newState;
    }
    if(action.type=="LOAD_TODOS"){
        let newState = {...state,todos:action.todos};
        return newState;
    }
    if(action.type=="POST_TODO"){
        let newState = {...state,todos:action.todos};
        return newState;
    }
    if(action.type=="DELETE_TODO"){
        let newState = {...state,todos: state.todos.filter((_, index) => index !== action.id)};
        return newState;
    }
    return state;
};
export default TodosReducer;