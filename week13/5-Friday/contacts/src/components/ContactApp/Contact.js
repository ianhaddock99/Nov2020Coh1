import React from 'react'
import ContactItem from './ContactItem'

const Contact = ({contacts, onDelete}) => {
  return (
    <>
      {contacts.map(contact =>{
          return <ContactItem key={contact.id} con={contact} onDelete={onDelete}/>
      })}
    </>
  )
}

export default Contact
