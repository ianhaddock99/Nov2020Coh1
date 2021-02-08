import React from 'react'
import {Button, Col, Row, Container} from 'react-bootstrap'

const ButtonComponent1 = (props) => {
  return (
    <>
        
           
                <Button variant={props.color} >{props.text}</Button>
                    
            
            
    </>
  )
}

export default ButtonComponent1;