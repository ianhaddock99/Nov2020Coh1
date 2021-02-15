import React, { Component } from 'react'
import {connect} from 'react-redux'

class ViewCount extends Component {
  render() {
    return (
      <>
        count holder
        <h1>{this.props.count}</h1>
      </>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStatetoProps, null)(ViewCount)
