import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SpanBadge} from './Styles'
import {deleteTodo} from '../actions'

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();
    return (
        <>
      <li>
      
      <div className="row pr-3">
          <div className="col-10">
                {
                    todo.editMode
                    ?
                    <TodoForm />
                }
          </div>

          <div className="col-2 text-right">
              <button className='button btn'>
            <SpanBadge>
               <FontAwesomeIcon icon={["fas", "pencil-alt"]} color="gray"/>
            </SpanBadge>
            </button>
              <button className='button btn' onClick={()=>dispatch(deleteTodo(todo.id))}>
            <SpanBadge>
               <FontAwesomeIcon icon={["fas", "trash"]} color="gray"/>
            </SpanBadge>
            </button>
          </div>
      </div>

      
      
      </li>

    </>
  )
}

export default TodoItem

