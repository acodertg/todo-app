import todoReducers from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        todo : todoReducers 
    },
    devTools : process.env.NODE_ENV !== 'production'
});

export default store;
