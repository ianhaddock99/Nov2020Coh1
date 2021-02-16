export const addPerson = (personObj) => {
    return {
        type: 'ADD_PERSON',
        data: personObj
    }
}


export const removePerson = (firstName) => {
    return {
        type: 'REMOVE _PERSON',
        data: firstName
    }
}