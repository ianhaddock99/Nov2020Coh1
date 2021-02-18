import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions/index'
import {v1 as uuidv1} from 'uuid'

const TodoForm = () => {

    const [task, setTask] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      let todoItem ={
          id: uuidv1(),
          task: task,
          editMode: false
      }
      dispatch(addTodo(todoItem))
      setTask('')
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="input-group">
    <div className="input-group-prepend">
        <span className="input-group-text">Todo</span>
    </div>
    <textarea className="form-control" aria-label="With textarea" value={task} onChange={(e)=>setTask(e.target.value)}></textarea>
    <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">Submit</button>
        
    </div>
    </div>
    </form>


    </>
  )
}

export default TodoForm
