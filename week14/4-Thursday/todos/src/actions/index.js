
//item{id, task, editmode}
const addTodo = (item) => {
  return{
      type:"ADD",
      data: item
  }
}

const deleteTodo = (id) => {
    return{
        type:"DELETE",
        id: id
    }
  }

  const updateTodo = (item) => {
    return{
        type:"UPDATE",
        data: item
    }
  }
