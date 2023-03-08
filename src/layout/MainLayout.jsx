import React from 'react'
import { Link } from 'react-router-dom'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'

export const MainLayout = () => {
  return (
    <>
     <TodoForm />
     <TodoList />
    </>
  )
}
