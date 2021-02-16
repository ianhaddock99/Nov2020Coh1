import React, { Component } from 'react'
import {addProduct} from '../actions/cartActions'
import {connect} from 'react-redux'
import {v1 as uuidv1} from 'uuid'

class AddProduct extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        let product = {
            
                id: uuidv1(),
                productName: this.refs.name.value ,
                price: this.refs.price.value
            
        }

        this.props.onAddProduct(product)
    }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <input ref="name" type="text" placeholder="Product Name" />
            <input ref="price" type="text" placeholder="Product Price" />

            <button type="submit">Submit</button>
        </form>

      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAddProduct: (product) => dispatch(addProduct(product))
  }
}





export default connect(null,null)(AddProduct);
