import React, { Component } from 'react'
import Contacts from './components/Contacts'
import data from './data/contacts'
import Days from './components/Days'
import DropDown from './components/DropDown'
import Button from './components/Button'



class App extends Component {

  render() {

    // let name = [
    
    // <Contacts firstName="Ian" lastName = "Haddock" email="4@me.com" phone="12345667" />,
    // <Contacts firstName="Ian" lastName = "Haddock" email="4@me.com" phone="12345667" />,
    // <Contacts firstName="Ian" lastName = "Haddock" email="4@me.com" phone="12345667" />


                // ]
    // let contacts = [
    //   {
    //   firstName: "Adam" ,
    //   lastName: "Mack" ,
    //   phone: "123454667" ,
    //   email: "1@me.com"
    //   },

    //   {
    //   firstName: "Ally" ,
    //   lastName: "D" ,
    //   phone: "567431290" ,
    //   email: "2@me.com"
    //   },

    //   {
    //   firstName: "Andrea" ,
    //   lastName: "Mye" ,
    //   phone: "87654321" ,
    //   email: "3@me.com"
    //   }
    // ]

    // let contactArr = data.map(contactObj =>{

    //   return <Contacts firstName={contactObj.firstName}
    //   lastName={contactObj.lastName}
    //   phone={contactObj.phone}
    //   email={contactObj.email}

    //   let allContactsArr = data.map(contactObj =>{

    //     return <Contacts firstName={contactObj.first_name}
    //     lastName={contactObj.last_name}
    //     phone={contactObj.phone}
    //     email={contactObj.email}
      
      
      
    //   />
    // })

    return (
      <>

        <Button color="info" text="Info" />
        <Button color="warning" text="Warning" />
        <Button color="danger" text="Danger" />
        <DropDown />



        {/* <Days /> */}



      {/* {contactArr} */}




      {/* {name}
<Contacts firstName={contacts[0].firstName} lastName={contacts[0].lastName} email={contacts[0].email} phone={contacts[0].phone} />

<Contacts firstName={contacts[1].firstName} lastName={contacts[1].lastName} email={contacts[1].email} phone={contacts[1].phone} />

<Contacts firstName={contacts[2].firstName} lastName={contacts[2].lastName} email={contacts[2].email} phone={contacts[2].phone} /> */}




        {/* <Contacts firstName="Adam" lastName="Mack" email="1@me.com" phone="123-456-789" />

        <Contacts firstName="Ally" lastName="Deeter" email="2@me.com" phone="876-543-217" />

        <Contacts firstName="Andrea" lastName="Myers" email="3@me.com" phone="564-783-212" /> */}




        {/* First Name: Adam  <br />
        Last Name: MacKinnon <br />

        First Name: Ally <br />
        Last Name: Deter <br />

        First Name: Andrea <br />
        Last Name: Myers <br />
        <br /> */}

      </>
    )
  }
}

export default App

