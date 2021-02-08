import React, { Component } from 'react'

class Days extends Component {
  render() {

    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

    let daysArr = days.map(day =>{
      return <li>{day}</li>
    })
    return (
      <>
        <ul>
          {daysArr}
        </ul>
      </>
    )
  }
}

export default Days
