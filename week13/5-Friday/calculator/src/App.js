import React, { Component } from 'react'
import Button from './components/Button1'

class App extends Component {
  render() {
    return (
      <>
        
        <Button color="secondary" text="0"  /> <br></br>
        <Button color="warning" text="AC" />
        <Button color="warning" text="+/-" />
        <Button color="warning" text="%" />
        <Button color="warning" text="x" /> <br></br>
        <Button color="secondary" text="7" />
        <Button color="secondary" text="8" />
        <Button color="secondary" text="9" />
        <Button color="warning" text="x" /> <br></br>
        <Button color="secondary" text="4" />
        <Button color="secondary" text="5" />
        <Button color="secondary" text="6" />
        <Button color="warning" text="x" /> <br></br>
        <Button color="secondary" text="1" />
        <Button color="secondary" text="2" />
        <Button color="secondary" text="3" />
        <Button color="warning" text="x" /> <br></br>
        <Button color="secondary" text="0" />
        <Button color="secondary" text="." />
        <Button color="warning" text="=" /> <br></br>


      </>
    )
  }
}

export default App


