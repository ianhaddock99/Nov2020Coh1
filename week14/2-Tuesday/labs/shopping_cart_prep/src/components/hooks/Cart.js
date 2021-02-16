import React from 'react'
import {useSelector} from 'react-redux'

const Cart = () => {
    const products = useSelector(state => state.cart);
    const totalCost = useSelector(state => state.totalCost);
  return (
    <>
      <h1>Shopping Cart</h1>

      total Cost: ${totalCost}

      {products.map(p=>{
          <li key={p.id}>{p.productName} ${p.price}</li>
      })}
    </>
  )
}

export default Cart
