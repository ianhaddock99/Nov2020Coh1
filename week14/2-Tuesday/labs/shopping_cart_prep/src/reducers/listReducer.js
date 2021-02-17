import {v1 as uuidv1} from 'uuid'


const initialState = {
   
    list: [
            {
                id: uuidv1(),
                productName: "Clean floor",
            }

        ],

}




const listReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'ADD_LIST':
            return {
                ...state,
                list: [...state.list, action.data]
            }

        case 'DELETE_LIST':
            let filteredList = state.list.filter(p =>{
                return p.id != action.data.id
            })
            return{
                ...state,
                
                list: filteredList
            }
        case 'EDIT_LIST': {
            const newList = state.list.map(p => p.id !== action.data.id ? p : action.data)
            return {
                ...state,
                list: newList
            }
        }
            default:
                return state;
        
        
        
    }
}

export default listReducer