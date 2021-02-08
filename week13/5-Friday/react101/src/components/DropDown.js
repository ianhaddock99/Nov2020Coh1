import React, { Component } from 'react'

class DropDown extends Component {
  render() {

    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

    let daysArr = days.map(day =>{
        return <option>{day}</option>
      })

    return (
      <>
        <select>
            {daysArr}
        </select>
      </>
    )
  }
}

export default DropDown
