import React from 'react'
import { useSelector } from 'react-redux';
import AddList from './AddList';
import DeleteList from './DeleteList'
import EditList from './EditList'

const List = () => {
  const [editMode, setEditMode] = React.useState('')
  const [value, setValue] = React.useState('')
  const products = useSelector(state => state.list);

  return (
    <>
      <h1>To Do List</h1>

<AddList />
<ul>
    {products.map(p => {
        console.log(editMode)
        return (
          <li key={p.id}>
            {p.id === editMode ? <input defaultValue={p.productName} onChange={(e) => setValue(e.target.value)} /> : <span>{p.productName}</span>}
            <EditList product={p} setEditMode={setEditMode} editMode={editMode} value={value} setValue={setValue} />
            <DeleteList product={p} editMode={editMode} />
          </li>
        )
    })}
</ul>
    </>
  )
}

export default List
