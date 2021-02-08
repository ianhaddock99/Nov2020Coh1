import React from 'react'

const Contacts = (props) => {
  return (
    <>
      {props.firstName} {props.lastName}  <br />


      {props.email}  <br />

        

      {props.phone}  <br />
      <br />
        
    </>
  )
}

export default Contacts

