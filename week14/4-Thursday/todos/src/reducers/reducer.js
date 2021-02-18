const initialState = {
    todos: [{
        id: 1,
        task: "Get some food",
        editMode: false
    }]
}


const reducer = (state, action) => {
  switch(action.type){

    case "ADD":
        return{
            ...state,
            todos: [...state.todos, action.data]
        }

    case "DELETE":
        return{
            ...state,
            todos: state.todos.filter(todo => todo.id != action.id)
        }

    case "UPDATE":

        let arrCopy = [...state.todos];

        let index = arrCopy.findIndex(todo => todo.id ===action.data.id)

        arrCopy[index] = action.data;

        return{
            ...state,
            todos: arrCopy
        }


      default:
          return state;
  }
}


export default reducer