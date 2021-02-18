import React from 'react'
import {Paper} from './Styles.js'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <>
      <div className="container-fluid">
          <div className="row mt-5">
            <div className="col">
                <h1 className="text-center">Todo List</h1>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-6 offset-3 py-5">
            <Paper height='auto' width='100%' bgc='white'>
                <TodoForm/>
            </Paper>    
        </div>
      </div>

      <div className="row">
          <div className="col-6 offset-3">
            <TodoList />
          </div>
      </div>
    </>
  )
}

export default Todo
