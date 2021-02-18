import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem'
import {UlHover} from './Styles'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
  return (
    <>
      {todos.map(todo =>{
          <UlHover>
          return <TodoItem key={todo.id} todo={todo} />
          </UlHover>
      })}
    </>
  )
}

export default TodoList
