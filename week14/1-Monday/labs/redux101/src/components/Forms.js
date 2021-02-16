import React, {useState} from "react";
import {addPerson} from '../actions/Persons'
import {useDispatch, useSelector} from 'react-redux'

const Forms = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const persons = useSelector(state => state.persons)
    const dispatch = useDispatch();
    //reducer 

    const handleOnSubmit = (e) => {
      e.preventDefault();
      dispatch(addPerson({
        firstName: firstName,
        lastName: lastName
      }))
    }
  return <>
    <form onSubmit={handleOnSubmit} >
        First Name: <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text"/> <br />
        Last Name: <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text"/> <br />

        <button type="submit">Submit</button>
    </form>

    {persons.map(person => 
    <li key={person.firstName}>{person.firstName} {person.lastName}<button>X</button></li>)}
  </>;
};

export default Forms;
