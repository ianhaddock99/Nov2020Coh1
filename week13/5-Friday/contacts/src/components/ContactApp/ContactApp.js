import React, {useState, useEffect} from 'react'
import AddContact from './AddContact'
import Contact from './Contact'
import {v4 as uuidv1} from 'uuid';

const ContactApp = () => {


  const [contacts, setContacts] = useState([])


    useEffect(() => {
      setContacts([

        {
            id: uuidv1(),
            category: "Friend",
            name: "John",
            email: "John@me.com",
            phnumber: 123-456-7890,
            address: '123 some street',
            city: "Atlanta",
            state: "GA",
            zipcode: '30041'
        },
        {
            id: uuidv1(),
            category: "CoWorker",
            name: "Jess",
            email: "Jess@me.com",
            phnumber: 321-356-7490,
            address: '321 some street',
            city: "Houston",
            state: "TX",
            zipcode: '30045'
        },
        {
            id: uuidv1(),
            category: "Friend",
            name: "Jordan",
            email: "Jordan@me.com",
            phnumber: 213-653-9800,
            address: '413 some street',
            city: "Tampa",
            state: "FL",
            zipcode: '30046'

        }



    ])
    }, [])

    const handleAddContact = (newContact) => {

        setContacts([newContact, ...contacts]);
    }

    const handleRemoveContact = (id) => {
        let oldcontacts = [...contacts];

        let filteredcontacts = oldcontacts.filter(project => {
            return id !== project.id
        })

        setContacts(filteredcontacts);

    }

  
  
  return (
    <>
      <div className="row mt-5">
        <div className="col-6 offset-3 text-center">
            <h3>Project Management</h3>
        </div>
      </div>


      <div className="row">

        <div className="col-6 offset-3">
            

            <div className="card">
                <h5 className="card-header">Add Contact</h5>
                <div className="card-body">
                    <AddContact addContact={(contact)=>handleAddContact(contact)} />
                </div>
            </div>

        </div>

      </div>

        <div className="row">
            <div className="col-6 offset-3 mt-4">
                <Contact onDelete={(id)=>handleRemoveContact(id)} contacts={contacts} />
            </div>
        </div>
    </>
  )
}

export default ContactApp
