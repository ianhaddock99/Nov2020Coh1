import React from 'react'
import {dispatch} from 'react-redux'
import {deleteProduct} from '../../actions/cartActions'

const DeleteProduct = ({product}) => {

  const dispatch = useDispatch();
  return (
    <>
      <button onClick={()=>dispatch(DeleteProduct(product))}>X</button>
    </>
  )
}

export default DeleteProduct
