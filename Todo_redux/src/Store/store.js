import {combineReducers, createStore} from "redux";
import CountReducer from "../reducers/CountReducer";
import TodosReducer from "../reducers/TodosReducer";
let Store = createStore(combineReducers({count:CountReducer,todos:TodosReducer}));
export default Store;