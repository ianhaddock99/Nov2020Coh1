import React from 'react'
import { useDispatch } from 'react-redux';
import { editList } from '../../actions/listActions';


const EditList = ({ product, setEditMode, editMode, value, setValue }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode('');
        setValue('');
        dispatch(editList({id: product.id, productName: value }))
    }
  return (
    <>
    {product.id === editMode ? 
    <input type="submit" onClick={(e) => handleSubmit(e) } /> :
    <button onClick={() => setEditMode(product.id) }>Edit</button>
    }
    </>
  )
}

export default EditList
