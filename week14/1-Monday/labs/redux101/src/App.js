import React, { Component } from 'react';
import {connect} from 'react-redux';
import increaseAction from './actions/increaseAction'
import decreaseAction from './actions/decreaseAction'

class App extends Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      title: "Counter Reducer"
    }
  }

  handleCount = () => {
    this.setState({
      count: this.state.count + 5
    })
    this.props.onIncreaseClick();
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        Global:<h1>{this.props.counter}</h1>
        Local:<h1>{this.state.count}</h1>
        <button onClick={this.props.handleCount}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </>
    )
  }
}//end of component


//mapping global state
const mapStatetoProps = (state) => {
    return{
      counter: state.count,
      title: state.title
    }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncreaseClick: ()=>dispatch(increaseAction()),
    onDecreaseClick: ()=>dispatch(decreaseAction())
  }
}



export default connect(mapStatetoProps,mapDispatchtoProps)(App)

