import React from "react";
import styled from 'styled-components';


const days = ["Mon", "Tues", 'Wed', "Thurs", "Fri", "Sat", "Sun"]

const StripedLi = styled.li`

    color: purple;

    ${props => {
      if(props.even){
        return `
        color: white;
    
        
        `
      }
    }}



`;

const Adjustments = (props) => {
  return <>
    {days.map((day, i) => {
      return <StripedLi even={(i + 1 % 2 === 0)}>{day}</StripedLi>
    })}
  
  </>;
};

export default Adjustments;
