import { combineReducers, createStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { TodoSlice } from "./TodoSlice";

const rootReducers = combineReducers({
 todos: TodoSlice.reducer,
 auth: AuthSlice.reducer
})
export const store = createStore(rootReducers)