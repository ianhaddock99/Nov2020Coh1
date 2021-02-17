import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteList} from '../../actions/listActions';

const DeleteList = ({product}) => {

    const dispatch = useDispatch();
  return (
    <>
      <button onClick={()=>dispatch(deleteList(product))} >X</button>
    </>
  )
}

export default DeleteList
