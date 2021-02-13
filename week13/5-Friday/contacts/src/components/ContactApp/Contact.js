import React from 'react'
import ContactItem from './ContactItem'

const Contact = ({contacts, onDelete}) => {
  return (
    <>
      {contacts
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(contact =>{
          return <ContactItem key={contact.id} con={contact} onDelete={onDelete}/>
      })}
    </>
  )
}

export default Contact
