import React, { Component } from 'react'

class Sample1 extends Component {

    constructor(props) {
      console.log(props);
        super(props);

        this.history = props.history;
        
      }
      
      handleClick() {
        console.log('inside handle click');
        this.history.push("/") // WILL PUSH TO HOMEPAGE. CAN BE USED ON BUTTON CLICK TO REDIRECT TO HOMEPAGE ON FORM
      }



  render() {
    return (
      <>
      <h1>
        Sample 1
        </h1>
        <h1>
        <button onClick={() => this.handleClick()}>Click to go back to home page</button>
        </h1>
      </>
    )
  }
}

export default Sample1
