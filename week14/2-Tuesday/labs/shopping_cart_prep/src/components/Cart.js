import React, { Component } from 'react'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct'
import {connect} from 'react-redux'

class Cart extends Component {
  render() {
    return (
      <>
        <h1>
          Shopping Cart
        </h1>
        <AddProduct />
        Total Cost: ${this.props.totalCost}

        <ul>
          {this.props.products.map(p => {
            return <li key={p.id}>{p.productName} ${p.price}</li>
          })}
        </ul>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    totalCost: state.totalCost,
    products: state.cart
  }
}



export default connect(mapStateToProps, null)(Cart)

