import { createStore, combineReducers } from "redux";

// Reducer import
import todoReducers from "./reducers/todoReducers";

const reducers = combineReducers({ todo: todoReducers });

const store = createStore(reducers);

export default store;
