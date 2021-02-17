import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment} from '../actions/templateActions'
import {DivSC, Paper} from './Styles'

const Hooks = () => {
    const count = useSelector(state => state.counter)

    const dispatch = useDispatch();

    useEffect(()=>{

      const getData = async() => {
        let result = await fetch('/api')
        let data =  await result.json();

        console.log(data)
      }

      getData();
      


    }, [])
  return (
    <>
      <h1>Hooks</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment(4))}>Click Me</button>

      <DivSC>
          Styled Comp
      </DivSC>

      <Paper>
          paper container
      </Paper>
    </>
  )
}

export default Hooks
