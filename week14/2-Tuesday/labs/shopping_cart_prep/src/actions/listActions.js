export const addList = (product) => {
    return {
        type: "ADD_LIST",
        data: product
    }
}
export const deleteList = (product) => {
    return {
        type: "DELETE_LIST",
        data: product
    }
}

export const editList = (product) => {
    return {
        type: "EDIT_LIST",
        data: product
    }
}