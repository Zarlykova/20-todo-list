import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { ActionTodo } from '../store/TodoSlice';

export const TodoList = () => {
const {todos} = useSelector((state) => state.todos)
console.log("todooo", todos);

const dispatch = useDispatch()

  return (
    <ul> 
     {
     todos.map((item) => (
     <TodoLi key={item.id}>
      <p style={{ color: item.completed ? "gray" : "", textDecoration: item.completed ? "line-through" : ""}}>{item.title}</p>
      <div>
       <ButtonCompleted onClick={() => dispatch(ActionTodo.completedTodoList(item.id))}>Completed</ButtonCompleted>
       <ButtonRemove onClick={() => dispatch(ActionTodo.removeTodo(item.id))}>Remove</ButtonRemove>
      </div>
      
      </TodoLi>
     ))
    }
    </ul>
  )
}


const TodoLi = styled.li`
background-color: aliceblue;
margin: 10px auto;
padding: 15px;
width: 600px;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`
const ButtonCompleted = styled.button`
background-color: #c1ce2e;
padding: 10px;
border-radius: 10px;
border: none;
color: #fff;
`
const ButtonRemove = styled.button`
background-color: #2484d8;
padding: 10px;
border-radius: 10px;
margin-left: 10px;
border: none;
color: #fff;
`
