import React, { Component } from 'react'
import { names } from './data/index'
import NameList from './components/NameList'

class App2 extends Component {

  constructor(){
    super();

    this.state = {
      data: names,
      searchVal: 'hello'
    }

  }
  
  handleEvent = (event) =>{
    this.setState({
      searchVal: event.target.value
    })
  }



  render() {
      const {data} = this.state;
    return (
      <>
        <input type="text" placeholder="Type a name" 
        onChange={this.handleEvent} 
        value={this.state.searchVal}
        />
        <NameList data={data} searchVal={this.state.searchVal} />
      </>
    )
  }
}

export default App2
