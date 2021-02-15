import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import increaseAction from '../actions/increaseAction'
import decreaseAction from '../actions/decreaseAction'

const CountHooks = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
  return (
    <>
      Count Hooks
      <h2>{count}</h2>

    </>
  )
}

export default CountHooks
