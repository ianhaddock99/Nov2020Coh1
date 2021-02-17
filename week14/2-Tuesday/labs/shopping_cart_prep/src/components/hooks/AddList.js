import React from 'react'
import {useDispatch} from 'react-redux';
import {v1 as uuidv1} from 'uuid';
import {addList} from '../../actions/listActions'

const AddList = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let product = {
            id: uuidv1(),
            productName: e.target.name.value
        }

        dispatch(addList(product));

        e.target.name.value = "";
    }




  return (
    <>
      <form onSubmit={handleSubmit}>

<input type="text" id="name"  placeholder="List Item"/> <br />


<button type="submit">Submit</button>
</form>
    </>
  )
}

export default AddList
