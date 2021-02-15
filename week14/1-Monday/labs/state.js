let state = {
    fName: "Ian",
    lName: "Haddock",
    city: "Houston"
}

console.log(state);


let newState = {
    ...state,
    fName: "John"
}

console.log(newState);
