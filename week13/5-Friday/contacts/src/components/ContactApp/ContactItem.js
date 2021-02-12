import React from 'react'

const ContactItem = (props) => {
  return (
    <>
      <li>
                <div className="row">
                  <div className="col-8">
                  {props.con.name} - {props.con.email} - {props.con.phnumber} - {props.con.address} - {props.con.city} - {props.con.state} - {props.con.zipcode} -
                  &nbsp;
                  <span className="quote">{props.con.category}</span>
                  </div>
                  <div className="col-4 text-right pr-5">
                    <a href="#" onClick={() => props.onDelete(props.con.id)}> X 🔥 </a>
                  </div>
                </div>
            </li>
    </>
  )
}

export default ContactItem
