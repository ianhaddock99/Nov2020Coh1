import React, {useState} from 'react'
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as outlinedHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactItem = (props) => {
  const [show, toggleShow] = useState(false);
  const [favorite, setFavorite] = useState(false);



  return (
    <>
      <li>
                <div className="row">
                  <div className="col-8">
                  {props.con.name} - {props.con.city} - {props.con.state} -
                  &nbsp;
                  <span className="quote">{props.con.category}</span>
                  </div>
                  {/* Ternary operator is show is true then idisplays if not will not display. */}
                  {show ? 
                    <div className="col-8">
                    {props.con.email} - {props.con.phnumber} - {props.con.address}  - {props.con.zipcode}
                    &nbsp;
                    </div>
                        : null
                  }     

                  <div className="col-4 text-right pr-5">
                    <a href="#" onClick={() => toggleShow(!show)}>{ show ? 'View Less' : 'View More' } </a>
                  </div>

                  <div className="col-4 text-right pr-5">
                    <a href="#" onClick={() => props.onDelete(props.con.id)}> X 🔥 </a>
                  </div>

                  <div className="col-4 text-right pr-5">
                    <a href="#" onClick={() => setFavorite(!favorite)}>{ favorite ? <FontAwesomeIcon icon={solidHeart} /> : <FontAwesomeIcon icon={outlinedHeart} /> } </a>
                  </div>
                </div>
            </li>
    </>
  )
}

export default ContactItem
