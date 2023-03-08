import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 todos: [
//   {
//    id: 1,
//    title: "baby",
//    completed: false
//   }
 ]
 
}

export const TodoSlice = createSlice({
 name: 'todo',
 initialState,
 reducers: {
   addTodoList(state, action){
    console.log(action);

    const newTodo = {
     id:  Math.random() * 100,
     title: action.payload,
     completed: false
    }
    state.todos.push(newTodo)
   },
   completedTodoList(state, action) {
    state.todos.map((item) => {
     if(item.id === action.payload){
         item.completed = !item.completed}
     })
  },
  removeTodo(state, action){
   state.todos = state.todos.filter((item) => item.id !== action.payload)
  },
  deleteAllTodos(state) {
     state.todos = []
  },
 }
})
export const ActionTodo = TodoSlice.actions
console.log(ActionTodo.addTodoList());